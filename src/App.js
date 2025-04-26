import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      <SpeedInsights />
      <Main />
    </div>
  );
}

export default App;
