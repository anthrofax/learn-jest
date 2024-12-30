import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [textChanged, setTextChanged] = useState(false);

  function changeText() {
    setTextChanged(true);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <Output>{!textChanged ? "It's good to see you!" : "Text changed!"}</Output>
      <button onClick={changeText}>Change</button>
    </div>
  );
}

export default Greeting;
