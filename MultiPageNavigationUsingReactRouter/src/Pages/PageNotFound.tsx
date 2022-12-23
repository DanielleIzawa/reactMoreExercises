import React from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();
  return (
    <div>Sorry about that, the page {location.pathname} doesn't exist!</div>
  );
}

export default PageNotFound;
