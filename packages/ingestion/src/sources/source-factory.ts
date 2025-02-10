import { Source } from "./source";
import { FileLogSource } from "./file-source";
import { LoggyTransport } from "./transport-source";

type LogSourceTypeMap = {
  file: FileLogSource;
  transport: LoggyTransport;
};

type TFileOptions = {
  filePath: string
}

type TTransportOptions = {
  secretKey: string
}

export class LogSourceFactory {
  static create<T extends keyof LogSourceTypeMap>(type: T, options?: T extends 'file' ? TFileOptions : T extends 'transport' ? TTransportOptions: never) {
    switch (type) {
      case "file":
        return new FileLogSource((options as TFileOptions).filePath) as LogSourceTypeMap[T];
      case "transport":
        return new LoggyTransport({secretKey: (options as TTransportOptions).secretKey}) as LogSourceTypeMap[T];
      default:
        throw new Error("Invalid log source type");
    }
  }
}