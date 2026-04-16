# exnexus 🚀

**exnexus** is a lightweight, production-ready utility belt for Node.js Express applications. It provides the core backend essentials every API needs: centralized error handling, structured responses, request logging, semantic error creators, and optional MongoDB connection helpers.

---

![npm](https://img.shields.io/npm/v/exnexus)
![license](https://img.shields.io/npm/l/exnexus)
![node-current](https://img.shields.io/node/v/exnexus)

---

## ✨ Features

* **asyncHandler**: Eliminate repetitive `try/catch` blocks in async controllers.
* **responseEnhancer**: Add expressive helpers like `res.success()`, `res.created()`, `res.fail()`, and more.
* **errors Utility**: Create semantic HTTP errors like `errors.notFound()` or `errors.badRequest()`.
* **requestLogger**: Log HTTP requests with method, URL, status, and response duration.
* **ApiError & ApiResponse**: Standardized JSON contracts for errors and successful responses.
* **errorHandler**: Global middleware for formatting and handling errors consistently.
* **connectDB**: Optional MongoDB connection helper for Mongoose users.

---

## 📦 Installation

### Core package

```bash
npm install exnexus
```

### With MongoDB support

```bash
npm install exnexus mongoose
```

> `mongoose` is an **optional peer dependency** and is only needed if you use `connectDB()`.

---

## ⚡ Quick Start

### 1. Initialize Global Middleware

```js
import express from "express";
import { responseEnhancer, requestLogger, errorHandler } from "exnexus";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(responseEnhancer);

// ... your routes ...

app.use(errorHandler);
```

---

### 2. Write Clean Controllers

```js
import { asyncHandler, errors } from "exnexus";

export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    throw errors.notFound("User not found");
  }

  return res.success(user, "Profile retrieved successfully");
});
```

---

### 3. Optional MongoDB Connection

```js
import express from "express";
import {
  connectDB,
  responseEnhancer,
  requestLogger,
  errorHandler,
} from "exnexus";

const app = express();

await connectDB({
  uri: process.env.MONGO_URI,
  retries: 3,
  retryDelay: 3000,
});

app.use(express.json());
app.use(requestLogger);
app.use(responseEnhancer);

// ... routes ...

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

---

## 🧩 Response Helpers

```js
res.success(data, "Fetched successfully");
res.created(data, "Created successfully");
res.fail("Something went wrong");
```

Example:

```json
{
  "success": true,
  "message": "Fetched successfully",
  "data": {
    "id": 1
  }
}
```

---

## ❌ Error Handling Example

```js
import { asyncHandler, errors } from "exnexus";

export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw errors.notFound("User not found");
  }

  return res.success(user);
});
```

---

## 🛢️ MongoDB Helper

```js
import { connectDB } from "exnexus";

await connectDB({
  uri: process.env.MONGO_URI,
  retries: 3,
  retryDelay: 5000,
  exitOnFailure: true,
});
```

### Options

| Option           | Type     | Default               | Description                 |
| ---------------- | -------- | --------------------- | --------------------------- |
| `uri`            | string   | process.env.MONGO_URI | MongoDB connection string   |
| `options`        | object   | {}                    | Mongoose connection options |
| `retries`        | number   | 3                     | Retry attempts              |
| `retryDelay`     | number   | 5000                  | Delay between retries       |
| `exitOnFailure`  | boolean  | true                  | Exit process on failure     |
| `logger`         | object   | console               | Logger instance             |
| `onConnected`    | function | -                     | Callback on connect         |
| `onError`        | function | -                     | Callback on error           |
| `onDisconnected` | function | -                     | Callback on disconnect      |

---

## 📂 Project Structure

```
src/
├── db/
├── middlewares/
├── utils/
└── index.js
```

---

## ⚙️ Environment Variables

| Variable  | Description              | Default    |
| --------- | ------------------------ | ---------- |
| NODE_ENV  | Show stack traces in dev | production |
| LOG_LEVEL | Logging level            | info       |
| MONGO_URI | Mongo connection string  | -          |

---

## 🧪 Testing

```bash
npm test
```

---

## 🤝 Contributing

PRs, issues, and ideas are welcome.

GitHub: https://github.com/FenilP07/Express-Toolkit

---

## 💬 Support

Open an issue for help or questions.

---

## 📄 License

MIT License
