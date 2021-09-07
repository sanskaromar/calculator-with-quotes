import React, {useState, useEffect} from "react"
import Key from "./Key"

function Keypad() {
  // input values / opertions
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);
  
  useEffect(() => {}, [op, nextValue, prevValue]);

  // This Object Stores handling of all 5 calculator operations
  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  // Performs Operation once atleast two umbers and one operation to perform are avaliable
  // Called from inside handleOperation function below
  const performOperation = () => {
    let tmp = CalculatorOperations[op]( parseFloat(prevValue), parseFloat(nextValue) );
    setOp(null);
    setNextValue(String(tmp));
    setPrevValue(null);
  };

  // USeful while taking input 
  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    // RegeX search for "." in input
    // Condition becomes false once user inserts "." in input
    // Removes possibility of input cases like 2.3.4 or 244.5.6 etc
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };

  const clearData = () => {
    setNextValue(0);
    setPrevValue(null);
    setOp(null)
  };

  const handleOperation = (value) => {

    if (Number.isInteger(value)) {
      // Concatsm the number untill any operation is entered
      handleNum(parseInt(value, 10));
    }
    else if (value in CalculatorOperations) {
        if (op === null) {
          setOp(value);
          setPrevValue(nextValue);
          setNextValue("");
        }
        // Updates the operation to be performed
        if (op) {
          setOp(value);
        }
        // Once everthing is avaliable, performs calculation
        if (prevValue && op && nextValue) {
          performOperation();
        }
    } 
    else if (value === "Clear") {
      clearData();
    } 
    else if (value === ".") {
      insertDot();
    }
  };

  console.log(nextValue)

    return(
        <div className="Keypad">
            <div className="display">
                <div className="result"> {prevValue} {op} {nextValue} </div>
            </div>
            <Key className="keys-numbers" keyValue={7} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={8} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={9} onClick={handleOperation} />
            <Key className="keys-operators" keyValue={"*"} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={4} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={5} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={6} onClick={handleOperation} />
            <Key className="keys-operators" keyValue={"-"} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={1} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={2} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={3} onClick={handleOperation} />
            <Key className="keys-operators" keyValue={"+"} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={0} onClick={handleOperation} />
            <Key className="keys-numbers" keyValue={"."} onClick={handleOperation} />
            <Key className="keys-operators" keyValue={"="} onClick={handleOperation} />
            <Key className="keys-operators" keyValue={"/"} onClick={handleOperation} />
            <Key className="Clear" keyValue={"Clear"} onClick={handleOperation} />
        </div>
    )
}

export default Keypad