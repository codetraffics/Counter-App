import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseValue = () => setCount(count + 1);
  const decreaseValue = () => setCount(count - 1);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={increaseValue} className="btn">
          +
        </button>
        <button onClick={decreaseValue} className="btn">
          -
        </button>
      </section>
    </>
  );
};

export default Counter;
