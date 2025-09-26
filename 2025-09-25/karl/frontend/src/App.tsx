import "./App.css";
import Cats from "./components/Cats.tsx";
import PropDrilling from "./components/PropDrilling.tsx";

function App() {
  return (
    <div className="App">
      <Cats />
      <h2>Prop Drilling:</h2>
      <PropDrilling />
    </div>
  );
}

export default App;
