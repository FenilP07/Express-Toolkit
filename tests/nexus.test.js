import { expect, jest, test } from "@jest/globals";
import {
  ApiError,
  ApiResponse,
  asyncHandler,
  errorHandler,
  errors,
  requestLogger,
  responseEnhancer,
} from "../src/index.js";
import mongoose from "mongoose";

describe("Express-Nexus Core Utilities", () => {
  // 1. Test ApiError
  test("ApiError should format correctly", () => {
    const error = new ApiError(404, "Not Found", ["Invalid ID"]);
    expect(error.statusCode).toBe(404);
    expect(error.success).toBe(false);
    expect(error.errors).toContain("Invalid ID");
    expect(error.stack).toBeDefined();
  });

  // 2. Test ApiResponse
  test("ApiResponse should structure success data", () => {
    const response = new ApiResponse(200, { user: "Fenil" }, "Fetched");
    expect(response.statusCode).toBe(200);
    expect(response.success).toBe(true);
    expect(response.data.user).toBe("Fenil");
  });

  // 3. Test asyncHandler
  test("asyncHandler should pass errors to next()", async () => {
    const mockReq = {};
    const mockRes = {};
    const mockNext = jest.fn();

    const error = new Error("Async Crash");
    const brokenFunc = async () => {
      throw error;
    };

    // Execute the wrapped function
    await asyncHandler(brokenFunc)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(error);
  });

  // 4. Test errorHandler Middleware
  test("errorHandler should convert Mongoose ValidationError to 400 ApiError", () => {
    const mockReq = { originalUrl: "/test", method: "GET" };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();

    // Simulate a Mongoose Validation Error
    const mError = new mongoose.Error.ValidationError();
    mError.message = "Validation failed";

    errorHandler(mError, mockReq, mockRes, next);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        message: "Validation failed",
      }),
    );
  });

  //Test Semantic Errors Object
  test("errors object should  create correct ApiError instances", () => {
    const badRequest = errors.badRequest("Missiing fields", ["email"]);
    const notFound = errors.notFound();

    expect(badRequest.statusCode).toBe(400);
    expect(badRequest.errors).toContain("email");
    expect(notFound.statusCode).toBe(404);
    expect(notFound.message).toBe("Resource not found");
  });

  //Test Response Enhancer Middleware
  test("respond enahncer should attach helper methods to res", () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    const next = jest.fn();

    responseEnhancer(mockReq, mockRes, next);

    expect(next).toHaveBeenCalled();
    expect(typeof mockRes.success).toBe("function");
    expect(typeof mockRes.created).toBe("function");

    //Test a specific helper

    mockRes.created({ id: 1 });
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true, data: { id: 1 } }),
    );
  });

  //Test Request Logger
  test("requestLogger should trigger log on response finish", () => {
    const mockReq = { method: "GET", originalUrl: "/api/test" };
    const mockRes = {
      statusCode: 200,
      on: jest.fn(), // We mock the 'on' event listener
    };
    const next = jest.fn();

    requestLogger(mockReq, mockRes, next);

    expect(next).toHaveBeenCalled();
    // Verify that it started listening for the 'finish' event
    expect(mockRes.on).toHaveBeenCalledWith("finish", expect.any(Function));
  });
});
