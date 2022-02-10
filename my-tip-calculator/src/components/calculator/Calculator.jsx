import InputCards from "./inputCard/InputsCard";
import ResultsCard from "./resultCard/ResultsCard";

const Calculator = () => {
  const principalDivision = (object) => {
    const billPerPerson = object.enteredBill / object.enteredNumberPeople;
    return billPerPerson
  };

  
  return (
    <div className="calculator">
      <InputCards onSaveData={principalDivision}></InputCards>
      <ResultsCard></ResultsCard>
    </div>
  );
};

export default Calculator;
