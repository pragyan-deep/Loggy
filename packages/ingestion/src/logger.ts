import fs from "fs";
import path from "path";

// Ensure the logs directory exists
const LOG_DIR = path.join(__dirname, "services/logs");
const LOG_FILE = path.join(LOG_DIR, "app.log");

if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
}

export function writeLog(level: string, message: string) {
    const logEntry = `${new Date().toISOString()} ${level.toUpperCase()} ${message}\n`;
    
    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) {
            console.error("Failed to write log:", err);
        }
    });
}
