import winston from "winston";
import { LogSourceFactory } from "./sources/source-factory";

const loggyInstance = LogSourceFactory.create('transport');

const logger = winston.createLogger({
    transports: [loggyInstance]
});

export default logger