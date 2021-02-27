const express = require("express");
const httpServer = require("http");
const socketio = require("socket.io");
const next = require("next");

const app = express();
const port = process.env.PORT || 3000;
const http = httpServer.createServer(app);
const io = socketio(http);

const dev = process.env.NODE_ENV != "production";

const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connect", socket => {
    console.log(socket);
    socket.emit("msg", "heyy");
})

nextApp.prepare().then(()=>{
    app.get("*", (req, res)=>{
        return nextHandler(req,res);
    })
    http.listen(port, () => console.log("Server is running..."));
})
