import { jest, describe, test, expect, beforeEach, afterEach } from "@jest/globals";

// Mock mongoose BEFORE importing the module under test
jest.unstable_mockModule("mongoose", () => ({
  default: {
    connect: jest.fn(),
    connection: {
      on: jest.fn(),
    },
  },
}));

const mongoose = (await import("mongoose")).default;
const { connectDB } = await import("../src/db/connectDB.js");

const mockLogger = {
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

describe("Database Connection Utility", () => {
  let exitSpy;

  beforeEach(() => {
    jest.clearAllMocks();

    exitSpy = jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit");
    });
  });

  afterEach(() => {
    exitSpy.mockRestore();
  });

  test("should successfully connect", async () => {
    mongoose.connect.mockResolvedValueOnce(mongoose);

    await connectDB({
      uri: "mongodb://localhost:27017/test",
      logger: mockLogger,
      exitOnFailure: false,
    });

    expect(mongoose.connect).toHaveBeenCalledWith(
      "mongodb://localhost:27017/test",
      expect.objectContaining({
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      })
    );

    expect(mockLogger.info).toHaveBeenCalledWith("[exnexus] MongoDB connected");
    expect(mongoose.connection.on).toHaveBeenCalledTimes(3);
  });

  test("should retry on failure and then connect", async () => {
    mongoose.connect
      .mockRejectedValueOnce(new Error("Fail"))
      .mockResolvedValueOnce(mongoose);

    await connectDB({
      uri: "mongodb://localhost:27017/test",
      retries: 1,
      retryDelay: 1,
      logger: mockLogger,
      exitOnFailure: false,
    });

    expect(mongoose.connect).toHaveBeenCalledTimes(2);
    expect(mockLogger.warn).toHaveBeenCalled();
  });

  test("should throw if uri is missing", async () => {
    await expect(
      connectDB({
        uri: "",
        logger: mockLogger,
        exitOnFailure: false,
      })
    ).rejects.toThrow(
      "[exnexus] Mongo URI is required. Pass { uri } or set process.env.MONGO_URI"
    );
  });

  test("should call process.exit when connection fails and exitOnFailure is true", async () => {
    mongoose.connect.mockRejectedValue(new Error("DB down"));

    await expect(
      connectDB({
        uri: "mongodb://localhost:27017/test",
        retries: 0,
        retryDelay: 1,
        logger: mockLogger,
        exitOnFailure: true,
      })
    ).rejects.toThrow("process.exit");

    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  test("should throw error instead of exiting when exitOnFailure is false", async () => {
    mongoose.connect.mockRejectedValue(new Error("DB down"));

    await expect(
      connectDB({
        uri: "mongodb://localhost:27017/test",
        retries: 0,
        retryDelay: 1,
        logger: mockLogger,
        exitOnFailure: false,
      })
    ).rejects.toThrow("DB down");
  });
});