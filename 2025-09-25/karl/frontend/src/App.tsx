import "./App.css";
import Cats from "./components/Cats.tsx";
import PropDrilling from "./components/PropDrilling.tsx";
import Context from "./components/Context.tsx";


function App() {
  return (
    <div className="App">
      <Cats />
      <h2>Prop Drilling:</h2>
      <PropDrilling />
      <h2>Context:</h2>
      <Context />
    </div>
  );
}

export default App;
