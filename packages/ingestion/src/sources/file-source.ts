
import chokidar from "chokidar";
import fs from "fs";
import { Source } from "./source";

export class FileLogSource implements Source {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  start(callback: (log: string) => void): void {
    const watcher = chokidar.watch(this.filePath, { persistent: true });

    watcher.on("change", (path) => {
      fs.readFile(path, "utf-8", (err, data) => {
        if (!err) {
          const logs = data.split("\n").filter((line) => line.trim() !== "");
          logs.forEach((log) => callback(log));
        }
      });
    });
    console.log(`Watching file: ${this.filePath}`);
  }
}
