import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  {
    /*let count = 0;*/
  }

  const handleButtonAdd = () => {
    setCount(count + 1);

    {
      /*count = count + 1;*/
    }

    {
      /*console.log("kliknięto mnie!");*/
    }
  };

  const handleButtonRemove = () => {
    setCount(count - 1);
  };

  const handleButtonReset = () => {
    setCount(0);
  };

  return (
    <div className={styles.Counter}>
      <p>{count}</p>
      <button onClick={handleButtonAdd}>Dodawaj przyjacielu!</button>
      <button onClick={handleButtonRemove}>Usuwaj przyjacielu!</button>
      <button onClick={handleButtonReset}>Resetuj przyjacielu!</button>
    </div>
  );
};

export default Counter;
