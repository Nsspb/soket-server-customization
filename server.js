const app = require("express")();
const httpServer = require("http").createServer(app);
const PORT = 1945;


const io = require("socket.io")(httpServer, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {
    console.log( "Соединение установлено с ID - " + socket.id);
    
socket.on("disconnect", () => {
    console.log(`${socket.id} - отключен :( `);
})


 });



httpServer.listen(PORT, () => {
    console.log( `Сервер запущен на порту ${PORT}`)
});