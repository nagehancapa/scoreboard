import "./App.scss";
import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title title="Scoreboard" />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
