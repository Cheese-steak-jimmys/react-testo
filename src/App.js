import logo from "./logo.svg";
import "./App.css";

let someMessage = "Grey MaTTer!";

function App() {
  let quizTopics = [
    "geography",
    "Anatomy",
    "History",
    "Math",
    "Science",
    "Lore",
    "Film",
    "Music",
    "General knowledge",
    "Riddles",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{someMessage}</h1>
        <h2>Test your knowledge</h2>
      </header>
      <div>
        <ul>
          {quizTopics.map((topics, index) => (
            <li key={index}>{topics}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
