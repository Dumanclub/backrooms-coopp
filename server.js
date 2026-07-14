const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.static(__dirname));

app.get("/", (req, res) => res.send("Backrooms Co-Op sinyal sunucusu calisiyor."));

const rooms = {};

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ room }) => {
    if (!room) return;
    socket.join(room);
    socket.data.room = room;
    if (!rooms[room]) rooms[room] = new Set();
    rooms[room].add(socket.id);

    socket.emit("roomJoined", { players: [...rooms[room]] });
    socket.to(room).emit("playerJoined", { id: socket.id });
  });

  socket.on("state", (data) => {
    const room = socket.data.room;
    if (!room) return;
    socket.to(room).emit("state", { id: socket.id, ...data });
  });

  socket.on("ping", (t) => {
    socket.emit("pong", t);
  });

  socket.on("voiceStart", ({ mode }) => {
    const room = socket.data.room;
    if (room) socket.to(room).emit("peerVoiceStart", { id: socket.id, mode });
  });
  socket.on("voiceStop", () => {
    const room = socket.data.room;
    if (room) socket.to(room).emit("peerVoiceStop", { id: socket.id });
  });
  socket.on("rtc-signal", ({ to, signal }) => {
    io.to(to).emit("rtc-signal", { from: socket.id, signal });
  });

  socket.on("puzzleEvent", (payload) => {
    const room = socket.data.room;
    if (room) socket.to(room).emit("puzzleEvent", payload);
  });

  socket.on("disconnect", () => {
    const room = socket.data.room;
    if (room && rooms[room]) {
      rooms[room].delete(socket.id);
      if (rooms[room].size === 0) delete rooms[room];
    }
    if (room) socket.to(room).emit("playerLeft", { id: socket.id });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Sunucu port " + PORT + " uzerinde calisiyor"));
