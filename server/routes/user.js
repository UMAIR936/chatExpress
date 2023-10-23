import express from "express";
const router = express.Router();

import {
  addUser,
  getUser,
  removeUser,
  getUsersInRoom,
} from "../controllers/users.js";
router.post("/", addUser);

export default router;
