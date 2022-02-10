import "./ResultsCard.css";
function ResultsCard(props) {
  return (
    <div className="Results-card">
      <div className="results-container">
        <div className="result">
          <p>Tip amount<span className="each-person">/person</span></p>
          <p className="result-value">$4,27</p>
        </div>
        <div className="result">
          <p>Total <span className="each-person">/person</span></p>
          <p className="result-value">{props.eachPerson}</p>
        </div>
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  );
}

export default ResultsCard;
