export const heroCode = `import express from "express";
import {
  asyncHandler,
  ApiResponse,
  errors,
  errorHandler,
} from "exnexus";

const app = express();

app.get(
  "/api/profile",
  asyncHandler(async (req, res) => {
    const user = { id: 1, name: "Fenil" };

    if (!user) {
      throw errors.notFound("User not found");
    }

    return res.status(200).json(
      new ApiResponse(200, user, "Profile fetched successfully")
    );
  })
);

app.use(errorHandler);`;

export const exampleCards = [
  {
    title: "Async route handling",
    description:
      "Keep controllers clean by removing repetitive try/catch blocks.",
    code: `import { asyncHandler } from "exnexus";

router.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
);`,
  },
  {
    title: "Standard API responses",
    description:
      "Send consistent success payloads that your frontend can depend on.",
    code: `import { ApiResponse } from "exnexus";

return res
  .status(201)
  .json(new ApiResponse(201, createdUser, "User created"));`,
  },
  {
    title: "Operational errors",
    description:
      "Throw structured errors with clear HTTP intent and readable messages.",
    code: `import { errors } from "exnexus";

if (!post) {
  throw errors.notFound("Post not found");
}`,
  },
  {
    title: "Global error middleware",
    description:
      "Handle app-wide errors from a single place near the bottom of your setup.",
    code: `import { errorHandler } from "exnexus";

app.use(errorHandler);`,
  },
];

export const heroSnippets = [
  {
    title: "async-handler.js",
    code: `import { asyncHandler } from "exnexus";

router.get("/users/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
);`,
  },
  {
    title: "response.js",
    code: `import { ApiResponse } from "exnexus";

return res
  .status(201)
  .json(new ApiResponse(201, user, "Created"));`,
  },
  {
    title: "errors.js",
    code: `import { errors } from "exnexus";

if (!post) {
  throw errors.notFound("Post not found");
}`,
  },
  {
    title: "middleware.js",
    code: `import { errorHandler } from "exnexus";

app.use(errorHandler);`,
  },
];