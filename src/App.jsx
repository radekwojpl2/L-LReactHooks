import "./App.css";
import React from "react";
import BrowserApp from "./BrowserApp";
import { UserProvider } from "./components/5PartFive/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserApp />
      </UserProvider>
    </div>
  );
}

export default App;
