interface Rot13Props {
  input: string;
  setInput: (x: string) => {};
  output: string;
  setOutput: (y: string) => {};
}

const Rot13: FC<Rot13Props> = (props: Rot13Props) => {
  const { input, setInput, output, setOutput } = props;
  const obfuscate = () => {
    const result = input.replace(/[a-z]/gi, (letter) =>
      String.fromCharCode(
        letter.charCodeAt(0) + (letter.toLowerCase() < "n" ? 13 : -13)
      )
    );
    console.log(input);
    setOutput(result);
  };
  const deobfuscate = () => {
    const result = output.replace(/[a-zA-Z]/g, (letter) => {
      const isUpperCase = letter === letter.toUpperCase();
      const offset = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      return String.fromCharCode(
        ((letter.charCodeAt(0) - offset + 13) % 26) + offset
      );
    });
    console.log(result);
    setInput(result);
  };

  const clearFields = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="card">
      <textarea
        name="input"
        id="input"
        cols={50}
        rows={30}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="btn" onClick={() => obfuscate()}>
          Rot!! &gt;&gt;
        </button>
        <button className="btn" onClick={() => deobfuscate()}>
          UnRot! &gt;&gt;
        </button>
        <button className="btn" onClick={() => clearFields()}>
          Clear All &gt;&gt;
        </button>
      </div>
      <textarea
        name="output"
        id="output"
        cols={50}
        rows={30}
        value={output}
        onChange={(e) => {
          setOutput(e.target.value);
        }}
      ></textarea>
    </div>
  );
};
export default Rot13;
