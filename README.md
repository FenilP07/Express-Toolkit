Here’s a refined preview of your README with improved formatting, structure, and clarity:

---

# excore

**excore** is a lightweight, standardized utility belt for Node.js Express applications. It provides the essential "core" logic every backend needs: centralized error handling, structured logging, and unified API responses.

---

## ✨ Features

- **asyncHandler**: Eliminate try/catch boilerplate in your controllers.
- **ApiError**: Standardized Error class with stack traces and status codes.
- **ApiResponse**: Consistent JSON structure for frontend responses.
- **errorHandler**: Global middleware for error catching and formatting (including Mongoose validation).
- **logger**: Production-ready Winston configuration with request streaming via Morgan.

---

## 📦 Installation

```bash
npm install excore
```

---

## 🛠 Usage

### 1. Simplify Controllers

Wrap your async functions to automatically catch errors and send them to the global handler:

```javascript
import { asyncHandler, ApiError, ApiResponse } from "excore";

export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    // Automatically caught and formatted by excore
    throw new ApiError(404, "User not found");
  }

  res.status(200).json(
    new ApiResponse(200, user, "Profile retrieved successfully")
  );
});
```

### 2. Plug-and-Play Middleware

In your `app.js`, import and use the error handler as the last middleware:

```javascript
import express from "express";
import { errorHandler } from "excore";

const app = express();

// ... your routes

// The global error interceptor must be last
app.use(errorHandler);
```

---

## 📂 Project Structure

```
src/
├── utils/
│   ├── ApiError.js       # Consistent error formatting
│   ├── ApiResponse.js    # Consistent success structure
│   ├── asyncHandler.js   # Promise wrapper for routes
│   └── logger.js         # Winston-based logging
└── middlewares/
    └── error.middleware.js # The global error interceptor
```

---

## ⚙️ Environment Configuration

| Variable   | Description                                      | Default     |
|------------|--------------------------------------------------|-------------|
| NODE_ENV   | Set to development to see stack traces in errors | production  |
| LOG_LEVEL  | Logging verbosity (info, error, warn, etc.)      | info        |

---

## 🧪 Testing

This project uses Jest to ensure utility reliability.

```bash
npm test
```

---

## 📄 License

This project is licensed under the MIT License.

---

Would you like me to update your README.md with this refined version?