import { useState } from "react";
import ButtonsList from "./ButtonsList";
import "./InputsCard.css"

function InputCards(props) {
  return (
    <div className="inputs-card">
      <div>
        <p>Bill</p>
        <input type="number" id="bill"/>
      </div>
      <ButtonsList></ButtonsList>
      <div>
        <p>Number of people</p>
        <input type="number" id="number-people"/>
      </div>
    </div>
  );
}

export default InputCards;
