import { useState } from "react";
import ButtonsList from "./ButtonsList";
import "./InputsCard.css";

function InputCards(props) {
  //Global data
  const [userInput, setUserInput]=useState({
    enteredBill:"0",
    enteredNumberPeople:1
  })

  //Bill handler
  const billHandler=(e)=>{
    setUserInput({
      ...userInput,
      enteredBill:parseInt(e.target.value)
    })

    props.onSaveData(userInput)
  }

  //Number person handler
  const personHandler=(e)=>{
    setUserInput({
      ...userInput,
      enteredNumberPeople:parseInt(e.target.value)
    })

    props.onSaveData(userInput)
  }
  return (
    <div className="inputs-card">
      <div>
        <p>Bill</p>
        <input
          type="number"
          id="bill"
          min="1"
          max="10000"
          onChange={billHandler}
        />
      </div>
      <ButtonsList></ButtonsList>
      <div>
        <p>Number of people</p>
        <input type="number" id="number-people" onChange={personHandler}/>
      </div>
    </div>
  );
}

export default InputCards;
