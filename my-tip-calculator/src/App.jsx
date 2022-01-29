import "./App.css";
import ResultsCard from "./components/ResultsCard";
import InputCards from "./components/InputsCard";
import MainLogo from "./components/MainLogo";

function App() {
  return (
    <div className="App">
      <MainLogo />
      <div className="calculator">
        <InputCards></InputCards>
        <ResultsCard></ResultsCard>
      </div>
    </div>
  );
}

export default App;
