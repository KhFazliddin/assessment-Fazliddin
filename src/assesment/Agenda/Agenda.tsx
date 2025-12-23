import React from "react";
import "./Agenda.css";

function Agenda() {
  return (
    <section className="agenda">
      <h2 className="agenda-title">Presentation Agenda</h2>

      <div className="agenda-content">
        {/* Introduction */}
        <div className="agenda-card">
          <h3>Introduction</h3>
          <p>My background and engineering journey</p>
          <p>
            Growth and professional development before and after joining
            Bellissimo Pizza International
          </p>
        </div>

        {/* Body 1 */}
        <div className="agenda-card">
          <h3>Body 1 — Experience & Impact</h3>
          <p>Achievements and key projects at Bellissimo Pizza</p>
          <ul>
            <li>Core responsibilities and feature ownership</li>
            <li>Technical challenges and engineering decisions</li>
            <li>Measurable impact and achievements</li>
          </ul>
        </div>

        {/* Body 2 */}
        <div className="agenda-card">
          <h3>Body 2 — Readiness for Next Level</h3>
          <p>
            Why I am ready for increased responsibility and the next engineering
            position
          </p>
          <ul>
            <li>Ownership beyond assigned tasks</li>
            <li>Ability to balance technical and business needs</li>
            <li>Collaboration and mentoring mindset</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="agenda-card highlight">
          <h3>Conclusion — Future Vision</h3>
          <p>
            Short-term and long-term goals, career growth plan and technical
            vision
          </p>
        </div>
      </div>
    </section>
  );
}

export default Agenda;
