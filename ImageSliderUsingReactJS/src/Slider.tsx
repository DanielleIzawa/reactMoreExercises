import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h3>Slider</h3>
        <Carousel className="item" showArrows={false}>
          <img
            src="https://ej2.syncfusion.com/react/demos/src/carousel/images/sea.jpg"
            alt="sea"
            style={{ height: "100%", width: "100% " }}
          />
          <img
            src="https://ej2.syncfusion.com/react/demos/src/carousel/images/trees.jpg"
            alt="spring_trees"
            style={{ height: "100%", width: "100% " }}
          />
          <img
            src="https://ej2.syncfusion.com/react/demos/src/carousel/images/rocks.jpeg"
            alt="rocks"
            style={{ height: "100%", width: "100% " }}
          />
        </Carousel>
      </div>
    </>
  );
  // <div>teste</div>;
}
