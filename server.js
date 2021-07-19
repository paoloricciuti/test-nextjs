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
const db = require('./models');
console.log(db);

const sockets = [];
const rooms = [];

io.on("connect", socket => {
    sockets.push(socket);
    socket.on("joinRoom", data => {
        sockets.find(elem => elem == socket).room = data;
        socket.join(data.room);
        let existing = rooms.find(room => room.room === data.room);
        if (existing) {
            if (!existing.users.includes(data.username)) {
                existing.users.push(data.username);
            }
        } else {
            existing = {
                room: data.room,
                users: [data.username],
                messages: []
            };
            rooms.push(existing);
        }
        socket.emit("joined", existing);
        io.to(data.room).emit("updateRoom", existing);
    });
    socket.on("msg", data => {
        console.log(data);
        let existing = rooms.find(room => room.room == data.room);
        if (existing && existing.messages) {
            existing.messages.push(data);
            io.to(data.room).emit("updateRoom", existing);
        }
    });
    socket.on("refreshRoom", ({ room }) => {
        socket.emit("updateRoom", rooms.find(room => room.room === room));
    })
})

nextApp.prepare().then(() => {
    app.get("*", (req, res) => {
        req.db = db;
        return nextHandler(req, res);
    })
    app.post("*", (req, res) => {
        req.db = db;
        return nextHandler(req, res);
    })
    http.listen(port, () => console.log("Server is running..."));
})
