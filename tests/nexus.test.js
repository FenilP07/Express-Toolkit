import { jest } from "@jest/globals";
import { ApiError, ApiResponse, asyncHandler, errorHandler } from "../src/index.js";
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
    const brokenFunc = async () => { throw error; };

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
      })
    );
  });
});
