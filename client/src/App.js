import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./components/Chat/Chat";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/chat" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
