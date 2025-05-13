import { useState, useEffect } from "react";

function Hello() {
  function bye() {
    console.log("child destroied"); // TODO create일 때도 찍히는데?
  }
  function hi() {
    console.log("child created");
    return bye;
  }
  useEffect(hi, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const [kewowrd, setKeyword] = useState("");
  console.log("always");

  useEffect(() => console.log("call once"), []);
  useEffect(() => console.log("button click only"), [showing]);
  useEffect(() => console.log("keyword input only"), [kewowrd]);
  useEffect(() => console.log("keyword & button only"), [showing, kewowrd]);

  return (
    <div>
      <input value={kewowrd} onChange={(event) => setKeyword(event.target.value)} placeholder="search" />
      {showing ? <Hello /> : null}
      <button onClick={() => setShowing((prev) => !prev)}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
