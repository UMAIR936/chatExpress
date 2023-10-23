import ChatModal from "../models/chat.js";

export const getChat = async (req, res) => {
  try {
    res.status(200).json({ result: "working" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
