const EventEmmiter = require("node:events");

const emmiter = new EventEmmiter();

emmiter.on("start", ()=>{
    console.log("program started");
});

emmiter.on("message", (text)=>{
    console.log(`Message: ${text}`);
});

emmiter.emit("start")
emmiter.emit("message","test")