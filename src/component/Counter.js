import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  function incrimet() {
    setCount(count + 1)
  }
  function dicriment() {
    setCount(count - 1)
  }
  return (
    <>
      <h1>{count}</h1>

      <button onClick={incrimet}>Incrimet</button>
      <button onClick={dicriment}>Dicriment</button>

    </>
  )
}
export default Counter