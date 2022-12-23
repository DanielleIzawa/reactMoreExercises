import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <div
            style={{
              width: 100 + "vw",
              height: 80,
              backgroundColor: "lightblue",
            }}
          >
            <br />
            <div style={{ marginBottom: "6px" }}>Website</div>
            <Link to="/" style={{ marginRight: "15px" }}>
              Home
            </Link>
            <Link to="/projects" style={{ marginRight: "15px" }}>
              Projects
            </Link>
            <Link to="/about">About</Link>
          </div>
          <Routes>
            <Route path="/:name" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
