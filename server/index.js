import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server);
import { configureSocket } from "./socket.js";
const CONNECTION_URL = "mongodb://localhost:27017/Chat";
const PORT = process.env.PORT || 4000;

// API Routes
import userRoutes from "./routes/users.js";

app.use("/user", userRoutes);

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connect to MongoDB
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

configureSocket(io);
