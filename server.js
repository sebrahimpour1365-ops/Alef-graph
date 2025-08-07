const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  let username = "ناشناس";

  socket.on("setUsername", (name) => {
    username = name || "ناشناس";
  });

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", { user: username, text: msg });
  });
});

server.listen(3000, () => {
  console.log("سرور روی پورت 3000 اجرا شد");
});
