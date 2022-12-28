import "./App.css";
import Container from "./Component/Container";
import DarkModeContext from "./Contexts/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeContext>
        <Container />
      </DarkModeContext>
    </div>
  );
}

export default App;
