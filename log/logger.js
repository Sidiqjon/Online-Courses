import winston from "winston";
const { json, timestamp, prettyPrint, combine } = winston.format;

let logger = winston.createLogger({
  level: "info",
  format: combine(json(), timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "log/info.log",
    }),
    new winston.transports.File({
      level: "warn",
      filename: "log/warning.log",
    }),
    new winston.transports.File({
      level: "error",
      filename: "log/error.log",
    }),
  ],
});

export default logger
