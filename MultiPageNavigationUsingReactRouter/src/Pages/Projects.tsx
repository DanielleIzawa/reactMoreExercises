import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        This is the projects page.
        <button
          onClick={() => {
            navigate("/about");
            console.log(navigate);
          }}
        >
          Go To The About Page
        </button>
      </div>
    </>
  );
}

export default Projects;
