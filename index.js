const io = require("socket.io-client");

const socket = io("ws://localhost:3000");

socket.on("connect", () => {
    console.log("Connected with ID: " + socket.id);

    socket.emit("time", "subscribe");
});

socket.on("time", event => {
    console.log(event)
});