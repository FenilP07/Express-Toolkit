import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, printf, colorize } = format;

const consoleLogFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const transportsList = [
  new transports.Console({
    format: combine(colorize(), timestamp(), consoleLogFormat),
  }),
];


if (process.env.NODE_ENV !== "test") {
  transportsList.push(new transports.File({ filename: "logs/app.log" }));
}

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), json()),
  transports: transportsList,
});

export default logger;