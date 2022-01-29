import "./App.css";
import ResultsCard from "./components/ResultsCard";
import InputCards from "./components/InputsCard";

function App() {
  return (
    <div className="App">
      <h1>Spli<span>tter</span></h1>
      <div className="calculator">
        <InputCards></InputCards>
        <ResultsCard></ResultsCard>
      </div>
    </div>
  );
}

export default App;
