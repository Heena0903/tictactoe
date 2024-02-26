import { useState } from "react";
import Board from "./components/board";

import "./styles.scss";

function App() {
  const [counter, setCounter] = useState(1);
  console.log("hello");

  const onBtnClick = () => {
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  };
  // using callback approach, current state to evaluate new state everytime
  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Poke me here</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
