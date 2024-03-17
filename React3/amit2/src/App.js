import { useState } from "react";
import "./App.css";
import Json from "./components/Json";
import LocalStorage from "./components/LocalStorage";
import Birthday from "./components/Birthday Reminder/Birthday";
import MyApi from "./components/MyApi";

function App() {
  const [newState, setNewState] = useState("");
  const dataFromChildApp = (val) => {
    setNewState(val);
  }
  return (
    <>
      {/* <LocalStorage /> */}
      {/* <div className="App">
        <Json newState />
      </div> */}
      {/* <Birthday /> */}
      <MyApi />
    </>
  );
}

export default App;
