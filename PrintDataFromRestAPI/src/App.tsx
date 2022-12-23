// import Axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    // Axios.get("https://official-joke-api.appspot.com/random_joke")
    // .then(
    //   (response) => {
    //     console.log(response);
    //     setJoke(response.data.setup + "..." + response.data.punchline);
    //   }
    // );
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + "..." + data.punchline);
      });
  };
  return (
    <div className="App">
      Hello Youtube
      <button onClick={getJoke}>Get Joke Right Now</button>
      {joke}
    </div>
  );
}

export default App;
