const EventEmmiter = require("node:events");

const emmiter = new EventEmmiter();

emmiter.on("message",(text) =>{
    console.log(`[NEW MESSAGE]: ${text}`);
});

emmiter.emit("message", "hello nugo");