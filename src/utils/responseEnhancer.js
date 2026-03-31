import { ApiResponse } from "./ApiResponse.js";

const responseEnhancer = (req, res, next) => {
  res.success = (data = null, message = "Success", statusCode = 200) => {
    return res
      .status(statusCode)
      .json(new ApiResponse(statusCode, data, message));
  };

  res.created = (data = null, message = "Created") => {
    return res.status(201).json(new ApiResponse(201, data, message));
  };

  res.noContent = () => {
    return res.status(204).send();
  };

  res.fail = (message = "Failed", statusCode = 400, data = null) => {
    return res
      .status(statusCode)
      .json(new ApiResponse(statusCode, data, message));
  };

  next();
};

export { responseEnhancer };
