import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";

export default function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USER_NAME}
      userSecret={process.env.USER_SECRET}
    />
  );
}
