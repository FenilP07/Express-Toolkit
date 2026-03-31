# exnexus 🚀

**exnexus** is a lightweight, standardized utility belt for Node.js Express applications. It provides the essential "mechanical necessities" every backend needs: centralized error handling, performance logging, semantic error creators, and unified API responses.

---

## ✨ Features

- **asyncHandler**: Eliminate `try/catch` boilerplate in your controllers.
- **responseEnhancer**: Syntactic sugar for `res.success()`, `res.created()`, and more.
- **errors Utility**: Semantic error creators like `errors.notFound()` or `errors.badRequest()`.
- **requestLogger**: Real-time performance monitoring and HTTP request logging.
- **ApiError & ApiResponse**: Consistent JSON contracts for seamless frontend integration.
- **errorHandler**: Global middleware for catching and formatting errors (includes Mongoose support).

---

## 📦 Installation

```bash
npm install exnexus
🛠 Usage1. Initialize Global MiddlewareIn your app.js, set up the enhancers and loggers early. The error handler must always be last.JavaScriptimport express from "express";
import { responseEnhancer, requestLogger, errorHandler } from "exnexus";

const app = express();

app.use(requestLogger);    // Logs method, URL, status, and duration
app.use(responseEnhancer); // Attaches .success(), .created(), etc. to 'res'

// ... your routes ...

// The global error interceptor must be the last middleware
app.use(errorHandler);
2. Clean ControllersCombine asyncHandler and responseEnhancer for highly readable, standardized controllers:JavaScriptimport { asyncHandler, errors } from "exnexus";

export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    // Automatically caught by errorHandler and logged by Winston
    throw errors.notFound("User not found");
  }

  // Consistent structure: { success: true, data: {...}, message: "..." }
  return res.success(user, "Profile retrieved successfully");
});
📂 Project StructurePlaintextsrc/
├── utils/
│   ├── ApiError.js         # Consistent error formatting
│   ├── ApiResponse.js      # Consistent success structure
│   ├── asyncHandler.js     # Promise wrapper for routes
│   ├── errors.js           # Semantic error creators
│   ├── logger.js           # Winston configuration
│   └── responseEnhancer.js # Express res.success() helpers
└── middlewares/
    ├── error.middleware.js # Global error interceptor
    └── requestLogger.js    # HTTP request & duration logger
⚙️ Environment ConfigurationVariableDescriptionDefaultNODE_ENVSet to development to see stack traces in JSONproductionLOG_LEVELLogging verbosity (info, error, warn, debug)info🧪 TestingThis project uses Jest to ensure utility reliability and middleware integrity.Bashnpm test
📄 LicenseThis project is licensed under the MIT License.