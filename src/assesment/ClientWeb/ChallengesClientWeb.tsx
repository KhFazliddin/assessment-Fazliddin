import React from "react";
import "./ChallengesClientWeb.css";

import badGateWay from "../../images/badGateway.png"; // poligon map screenshot
import deliveryMapImg from "../../images/polygone.png"; // example delivery area

function ChallengesClientWeb() {
  return (
    <section className="challenges-client">
      <h2 className="challenges-title">
        Bellissimo Client Website — Key Features & Challenges
      </h2>

      <p className="challenges-intro">
        I contributed to several critical frontend features for the Bellissimo
        Client Website, focusing on user experience, interactive maps, and
        delivery area visualization.
      </p>

      <div className="challenges-grid">
        {/* FEATURE CARD */}
        <div className="challenge-card">
          <img src={deliveryMapImg} alt="Delivery map feature" />{" "}
          <div className="challenge-content">
            <h3>City Selection & Delivery Area Polygon</h3>
            <p>
              Implemented a feature where users can select their city and the
              delivery boundaries are dynamically drawn on the map using
              polygons.
            </p>
            <ul>
              <li>Dynamic rendering of polygons on the map for each city</li>
              <li>Optimized for performance with multiple regions</li>
              <li>
                Seamless integration with user interface and checkout flow
              </li>
            </ul>
          </div>
        </div>

        {/* LEARNINGS & CHALLENGES */}
        <div className="challenge-card">
          <img src={badGateWay} alt="Delivery map feature" />
          <div className="challenge-content">
            <h3>Challenges & Learnings</h3>
            <ul>
              <li>Working with map libraries (Leaflet / Google Maps API)</li>
              <li>Handling complex user interactions with polygons</li>
              <li>Optimizing rendering for large maps and multiple cities</li>
              <li>Collaborating with backend for delivery area data</li>
              <li>Improved problem-solving and architecture thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesClientWeb;
