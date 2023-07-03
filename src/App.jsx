import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <ul>
          <li>lista 1.1</li>
          <li>lista 1.2</li>
          <li>lista 1.3</li>
        </ul>
      </div>
      <ul>
        <li>lista 2.1</li>
        <li>lista 2.2</li>
        <li>lista 2.3</li>
      </ul>
    </>
  );
}

export default App;
