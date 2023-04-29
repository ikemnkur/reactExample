import React, { useState } from "react";

export default function StateMgt3() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleChange = (symbol) => {
    if (symbol === "-") {
    //   setCurrentNumber(currentNumber - 1);
      setCurrentNumber((prev) => prev - 1);
      return true;
    }

    setCurrentNumber((prev) => prev + 1);
    return true;
  };

  return (
    <div>
      <button onClick={() => handleChange("-")}>-</button> Current Number is{" "}
      {currentNumber} <button onClick={() => handleChange("+")}>+</button>
    </div>
  );
}
