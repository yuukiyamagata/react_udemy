import { useState } from "react";
const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <p>テストコンポーネント</p>
    { count }<br />
    <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  )
}

export default TestComponent;