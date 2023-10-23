import express from "express";
const router = express.Router();

import { getChat } from "../controllers/chat.js";
router.post("/", getChat);

export default router;
