import ButtonsList from "./ButtonsList";
import "./InputsCard.css";

function InputCards(props) {
  //Bill handler
  const billHandler = (e) => {
    props.saveBillInfo(e.target.value);
  };

  //Number person handler
  const personHandler = (e) => {
    if (e.target.value == 1) {
      return;
    }
    props.saveNumberPerson(e.target.value);
  };
  return (
    <div className="inputs-card">
      <div>
        <p>Bill</p>
        <input
          type="number"
          id="bill"
          min="1"
          max="10000"
          value={props.billValue}
          onChange={billHandler}
        />
      </div>
      <ButtonsList savePercentage={props.savePercentage}></ButtonsList>
      <div>
        <p>Number of people</p>
        <input
          type="number"
          id="number-people"
          value={props.peopleValue}
          onChange={personHandler}
        />
      </div>
    </div>
  );
}

export default InputCards;
