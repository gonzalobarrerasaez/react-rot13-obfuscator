import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Rot13 from "./components/Rot13";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <Title />
      <Rot13
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
      />
    </>
  );
}

export default App;
