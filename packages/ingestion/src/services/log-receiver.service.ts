import { LogSourceFactory } from "../sources/source-factory";
import dotenv from "dotenv";
import path from "path";

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "app.log");

dotenv.config();

export class LogReceiverService {
  private sources: any[];

  constructor() {
    this.sources = [];
  }

  start(): void {
    const configuredSources = process.env.LOG_SOURCES?.split(",") || [];

    // configuredSources.forEach((sourceType) => {
    //   try {
    //     const logSource = LogSourceFactory.create(sourceType.trim(), { filePath: LOG_FILE });
    //     logSource.start((log) => this.processLog(log));
    //     this.sources.push(logSource);
    //   } catch (error) {
    //     console.error(`Error initializing log source (${sourceType}):`, error);
    //   }
    // });
  }

  private processLog(log: string): void {
    console.log("Received log:", log);
    // Forward to Processing Module (Future Implementation)
  }
}
