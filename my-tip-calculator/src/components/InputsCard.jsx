import { useContext, useState } from "react";
import ButtonsList from "./ButtonsList";
import "./InputsCard.css";

function InputCards(props) {
  const [currentBill, setBill] = useState(0);
  const showResult = (event) => {
    const newValue = () => {
      const value = event.target.value;
      const fixedValue = Number(value);
      return fixedValue;
    };
    setBill(newValue);
    console.log(currentBill);
    console.log(typeof currentBill);
  };

  // const Bill=useContext
  return (
    <div className="inputs-card">
      <div>
        <p>Bill</p>
        <input
          type="number"
          id="bill"
          min="1"
          max="10000"
          onChange={showResult}
        />
      </div>
      <ButtonsList></ButtonsList>
      <div>
        <p>Number of people</p>
        <input type="number" id="number-people" />
      </div>
    </div>
  );
}

export default InputCards;
