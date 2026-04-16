const DEFAULT_OPTIONS = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const connectDB = async ({
  uri = process.env.MONGO_URI,
  options = {},
  retries = 3,
  retryDelay = 5000,
  onConnected,
  onError,
  onDisconnected,
  exitOnFailure = true,
  logger = console,
} = {}) => {
  if (!uri) {
    throw new Error(
      "[exnexus] Mongo URI is required. Pass { uri } or set process.env.MONGO_URI"
    );
  }

  let mongooseModule;

  try {
    mongooseModule = await import("mongoose");
  } catch {
    throw new Error(
      "[exnexus] Mongoose is not installed. Install it in your app with: npm install mongoose"
    );
  }

  const mongoose = mongooseModule.default || mongooseModule;
  const finalOptions = { ...DEFAULT_OPTIONS, ...options };

  let attempt = 0;

  while (attempt <= retries) {
    try {
      await mongoose.connect(uri, finalOptions);

      logger.info?.("[exnexus] MongoDB connected");

      mongoose.connection.on("error", (err) => {
        logger.error?.("[exnexus] MongoDB connection error:", err);
        if (typeof onError === "function") onError(err);
      });

      mongoose.connection.on("disconnected", () => {
        logger.warn?.("[exnexus] MongoDB disconnected");
        if (typeof onDisconnected === "function") onDisconnected();
      });

      mongoose.connection.on("connected", () => {
        if (typeof onConnected === "function") onConnected();
      });

      return mongoose;
    } catch (error) {
      attempt += 1;

      logger.error?.(
        `[exnexus] MongoDB connection attempt ${attempt} failed:`,
        error
      );

      if (attempt > retries) {
        if (exitOnFailure) {
          logger.error?.("[exnexus] Exiting process due to DB connection failure");
          process.exit(1);
        }

        throw error;
      }

      logger.warn?.(
        `[exnexus] Retrying MongoDB connection in ${retryDelay}ms... (${attempt}/${retries})`
      );

      await wait(retryDelay);
    }
  }
};