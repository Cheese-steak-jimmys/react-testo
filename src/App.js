import logo from "./logo.svg";
import "./App.css";

let someMessage = "Hello People!";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> {someMessage}</h1>
      </header>
    </div>
  );
}

export default App;
