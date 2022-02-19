import { useState } from "react";
import InputCards from "./inputCard/InputsCard";
import ResultsCard from "./resultCard/ResultsCard";

const Calculator = () => {
  //Data from input forms
  const [bill, setBill] = useState(0);
  const [numberPerson, setNumberPerson] = useState(1);

  const addedBill = (addedInfo) => {
    setBill(+addedInfo);
  };

  const addedPersons = (addedNumberPersons) => {
    setNumberPerson(+addedNumberPersons);
  };

  //Data from buttons percentage
  const [percentage, setPercentage] = useState(0);

  const addedPercentage = (numberButton) => {
    setPercentage(+numberButton);
  };

  // //mainDivisions
  // const [personTip, setPersonTip]=useState(0)

  // console.log(personTip)
  // const tipDivision=()=>{
  //   const tipGlobal=bill*percentage
  //   console.log("TipGlobal"+tipGlobal)
  // }

  // setPersonTip(tipDivision)

  return (
    <div className="calculator">
      <InputCards
        saveBillInfo={addedBill}
        saveNumberPerson={addedPersons}
        savePercentage={addedPercentage}
      ></InputCards>
      <ResultsCard
        userBill={bill}
        totalPercentage={percentage}
        numberPersons={numberPerson}
      ></ResultsCard>
    </div>
  );
};

export default Calculator;
