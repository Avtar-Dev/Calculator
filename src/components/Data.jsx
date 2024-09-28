import { useState } from "react";

const Data = () => {
  const [valueOfButton, setValueOfButton] = useState("");
  console.log(valueOfButton);

  const buttonHandler = (e) => {
    setValueOfButton((prevValue) => prevValue.concat(e.target.innerText));
  };

  const evaluateExpression = () => {
    const result = eval(valueOfButton);
    setValueOfButton(result.toString());
  };

  const backHandler = () => {
    const backButton = valueOfButton.slice(0, valueOfButton.length - 1);
    setValueOfButton(backButton);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Text"
          value={valueOfButton}
          className="input"
        />

        <div className="buttons">
          <div className="btns">
            <button onClick={() => setValueOfButton("")}>C</button>
            <button onClick={buttonHandler}>M+</button>
            <button onClick={backHandler}>{"<<<"}</button>
            <button onClick={buttonHandler}>+</button>
          </div>
          <div className="btns">
            <button onClick={buttonHandler}>7</button>
            <button onClick={buttonHandler}>8</button>
            <button onClick={buttonHandler}>9</button>
            <button onClick={buttonHandler}>/</button>
          </div>
          <div className="btns">
            <button onClick={buttonHandler}>4</button>
            <button onClick={buttonHandler}>5</button>
            <button onClick={buttonHandler}>6</button>
            <button onClick={buttonHandler}>*</button>
            <button onClick={buttonHandler}>1</button>
            <button onClick={buttonHandler}>2</button>
            <button onClick={buttonHandler}>3</button>
            <button onClick={buttonHandler}>-</button>
          </div>

          <div className="btns">
            <button onClick={buttonHandler}>0</button>
            <button onClick={buttonHandler}>.</button>
            <button onClick={buttonHandler}>%</button>
            <button onClick={evaluateExpression}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
