import express from "express";
import { writeLog } from "./logger";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ingestion Module Running")
});

app.post("/log", (req, res) => {
    const { level = "info", message = "Default log message" } = req.body;
    writeLog(level, message);
    res.json({ message: "Log written successfully" });
});

export default app;