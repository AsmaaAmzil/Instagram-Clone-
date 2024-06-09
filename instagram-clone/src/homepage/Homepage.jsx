import React from "react";
import "./Homepage.css";
import TimeLine from "./timeline/Timeline";
import Navigation from "./navigation/Navigation";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navigation">
        {" "}
        <Navigation />
      </div>
      <div className="homepage__timeline">
        {" "}
        <TimeLine />
      </div>
    </div>
  );
}

export default Homepage;
