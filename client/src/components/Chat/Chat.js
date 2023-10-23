import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import { useLocation } from "react-router-dom";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import "./Chat.css";
import queryString from "query-string";
import {
  Box,
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
const ENDPOINT = "http://localhost:4000";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    console.log(name, room);
  }, [location, ENDPOINT]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <Box className="outerContainer">
      <Box className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Box>
    </Box>
  );
};

export default Chat;
