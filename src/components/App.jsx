import React from "react";

var isDone = false;

function strike() {
  // isDone = true;
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
    </div>
  );
}

export default App;
