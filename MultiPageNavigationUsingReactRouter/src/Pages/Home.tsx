import React from "react";
import { useParams } from "react-router-dom";

function Home() {
  let { name } = useParams();
  return <div>This is the Home page. You are {name}</div>;
}

export default Home;
