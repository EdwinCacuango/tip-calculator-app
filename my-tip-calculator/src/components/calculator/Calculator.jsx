import { useState } from "react";
import InputCards from "./inputCard/InputsCard";
import ResultsCard from "./resultCard/ResultsCard";

const Calculator = () => {
  // const [generalData, setGeneralData]=useState({
  //   tipPerson:0,
  //   billPerson:0    
  // })

  const [billPerson, setBillPerson]=useState(0)
  const principalDivision = (object) => {
    console.log(object.enteredNumberPeople)
    const billPerPerson = object.enteredBill / object.enteredNumberPeople;
    
    setBillPerson(billPerPerson)
    
  };

  
  return (
    <div className="calculator">
      <InputCards onSaveData={principalDivision}></InputCards>
      <ResultsCard eachPerson={billPerson}></ResultsCard>
    </div>
  );
};

export default Calculator;
