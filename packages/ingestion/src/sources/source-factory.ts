import { Source } from "./source";
import { FileLogSource } from "./file-source";
// import { ApiLogSource } from "./ApiLogSource";
// import { KafkaLogSource } from "./KafkaLogSource";

export class LogSourceFactory {
  static create(type: string, options?: any): Source {
    switch (type) {
      case "file":
        return new FileLogSource(options.filePath);
      // case "api":
      //   return new ApiLogSource();
      // case "kafka":
      //   return new KafkaLogSource();
      default:
        throw new Error("Invalid log source type");
    }
  }
}