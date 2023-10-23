import React from "react";
import { Box } from "@material-ui/core";
import "./Message.css";

//import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, message }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Box className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <Box className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </Box>
    </Box>
  ) : (
    <Box className="messageContainer justifyStart">
      <Box className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </Box>
      <p className="sentText pl-10 ">{user}</p>
    </Box>
  );
};

export default Message;
