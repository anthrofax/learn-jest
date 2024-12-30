import { useState } from "react";

function Greeting() {
  const [textChanged, setTextChanged] = useState(false);

  function changeText() {
    setTextChanged(true);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>{!textChanged ? "It's good to see you!" : "Text changed!"}</p>
      <button onClick={changeText}>Change</button>
    </div>
  );
}

export default Greeting;
