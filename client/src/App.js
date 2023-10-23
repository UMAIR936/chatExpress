import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
