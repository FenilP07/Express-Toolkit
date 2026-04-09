import {
  Zap,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  TerminalSquare,
  Database,
} from "lucide-react";

export const features = [
  {
    icon: Zap,
    title: "asyncHandler",
    description:
      "Wrap async controllers once and stop repeating try/catch in every route.",
  },
  {
    icon: AlertTriangle,
    title: "ApiError",
    description:
      "Create consistent operational errors with status codes and cleaner failure handling.",
  },
  {
    icon: CheckCircle2,
    title: "ApiResponse",
    description:
      "Return predictable, frontend-friendly response shapes across your API.",
  },
  {
    icon: ShieldCheck,
    title: "errorHandler",
    description:
      "Centralized global middleware for formatting and responding to app errors.",
  },
  {
    icon: TerminalSquare,
    title: "logger",
    description:
      "Production-friendly logging utilities for better debugging and maintainability.",
  },
  {
    icon: Database,
    title: "Mongoose-aware",
    description:
      "Designed to fit common Node and Express backend patterns, including validation flows.",
  },
];