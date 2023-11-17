import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const obfuscate = () => {
    const result = input.replace(/[a-z]/gi, (letter) =>
      String.fromCharCode(
        letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
      )
    );
    setOutput(result);
  };

  return (
    <>
      <h1>Rot13 Obfuscator</h1>
      <p></p>
      <div className="card">
        <textarea
          name="input"
          id="input"
          cols={50}
          rows={30}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
        <button className="btn" onClick={obfuscate}>
          Go! &gt;&gt;
        </button>
        <textarea
          name="output"
          id="output"
          cols={50}
          rows={30}
          disabled
          defaultValue={output}
        ></textarea>
      </div>
    </>
  );
}

export default App;
