import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.client_Id}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
