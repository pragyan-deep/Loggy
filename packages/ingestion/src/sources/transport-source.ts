import TransportStream from "winston-transport";
import { Source } from "./source";

interface LoggyTransportOptions extends TransportStream.TransportStreamOptions {
    secretKey: string;
}

export class LoggyTransport extends TransportStream implements Source {
    constructor(opts: LoggyTransportOptions) {
        super(opts);
        this.verifySecretKey(opts.secretKey)
    }
    start(callback: (log: string) => void): void {
        throw new Error("Method not implemented.");
    }

    verifySecretKey(secretKey: string) {
        //TODO: Verify secret key
        return true;
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });

        console.log(info, "====")
        // Perform the writing to the remote service
        callback();
    }
}