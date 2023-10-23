import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import chatRoutes from "./routes/chats.js";
import userRoutes from "./routes/user.js";
import {
  getUser,
  addUser,
  removeUser,
  getUsersInRoom,
} from "./controllers/users.js";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/chat", chatRoutes);
app.use("/user", userRoutes);
const CONNECTION_URL = "mongodb://localhost:27017/Chat";
const PORT = process.env.PORT || 4000;

io.on("connection", (socket) => {
  console.log("New connection created");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    socket.join(user.room);
    socket.emit("message", {
      user: "admin",
      message: `${user.name}, welcome to ${user.room}`,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
