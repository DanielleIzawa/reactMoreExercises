import React from "react";
import routes from "./routes";
import About from "./../Pages/About";
import Home from "./../Pages/Home";
import Projects from "./../Pages/Projects";
import PageNotFound from "./../Pages/PageNotFound";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Routing() {
  return (
    <>
      <div
        style={{ width: 100 + "vw", height: 80, backgroundColor: "lightblue" }}
      >
        Website
      </div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Router>
        <Switch>
          <Route path="/" exact component={<Home />} />
          <Route path={routes.about} component={<About />} />
          <Route path={routes.projects} component={<Projects />} />
          <Route path="*" component={<PageNotFound />} />
        </Switch>
      </Router>
    </>
  );
}
