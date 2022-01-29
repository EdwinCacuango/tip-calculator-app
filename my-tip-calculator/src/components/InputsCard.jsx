import { useState } from "react";
import "./InputsCard.css"

function InputCards(props) {
  return (
    <div className="inputs-card">
      <div>
        <p>Bill</p>
        <input type="number" id="bill"/>
      </div>
      <div>
        <ul className="btn-list">
          <li>
            <button className="percentage-btn">5%</button>
          </li>
          <li>
            <button className="percentage-btn">10%</button>
          </li>
          <li>
            <button className="percentage-btn">15%</button>
          </li>
          <li>
            <button className="percentage-btn">25%</button>
          </li>
          <li>
            <button className="percentage-btn">50%</button>
          </li>
          <li>
            <button className="percentage-btn">Custom</button>
          </li>
        </ul>
      </div>
      <div>
        <p>Number of people</p>
        <input type="number" id="number-people"/>
      </div>
    </div>
  );
}

export default InputCards;
