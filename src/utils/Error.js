import { ApiError } from "./ApiError.js";

const errors = {
  badRequest: (message = "Bad Request", errors = []) =>
    new ApiError(400, message, errors),

  unauthorized: (message = "Unauthorized", errors = []) =>
    new ApiError(401, message, errors),

  forbidden: (message = "Forbidden", errors = []) =>
    new ApiError(403, message, errors),

  notFound: (message = "Resource not found", errors = []) =>
    new ApiError(404, message, errors),

  conflict: (message = "Conflict", errors = []) =>
    new ApiError(409, message, errors),

  unprocessableEntity: (message = "Unprocessable Entity", errors = []) =>
    new ApiError(422, message, errors),

  tooManyRequests: (message = "Too Many Requests", errors = []) =>
    new ApiError(429, message, errors),

  internal: (message = "Internal Server Error", errors = []) =>
    new ApiError(500, message, errors),
};

export { errors };