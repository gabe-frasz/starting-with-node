import EventEmitter from "events";
const uuid = require("uuid");

export class Logger extends EventEmitter {
    log(message: string) {
        // call event
        this.emit("message", { id: uuid.v4(), message });
    }
}

const logger = new Logger();

logger.on("message", (data) => console.log(data));

logger.log("hello there");
