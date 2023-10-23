import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import { useLocation } from "react-router-dom";
const ENDPOINT = "http://localhost:4000";

import queryString from "query-string";
const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    setName(name);
    setRoom(room);

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.emit("join", { name, room }, ({ error }) => {
      console.log(error);
    });
    console.log(name, room);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location, ENDPOINT]);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Chat;
