import React from "react";
import "./FinalSummary.css";

function FinalSummary() {
  return (
    <section className="final-summary">
      <h2 className="final-title">Final Summary</h2>

      <p className="final-intro">
        Over the past period at Bellissimo Pizza, I have grown from a frontend
        executor into an engineer who takes ownership of features, thinks about
        architecture, and delivers production-ready solutions.
      </p>

      <div className="final-grid">
        <div className="final-card">
          <h3>Technical Growth</h3>
          <ul>
            <li>Developed and delivered complex frontend features end-to-end</li>
            <li>Worked with real production systems used by thousands of users</li>
            <li>Integrated frontend with backend APIs and WebSockets</li>
            <li>Focused on performance, optimization, and scalability</li>
          </ul>
        </div>

        <div className="final-card">
          <h3>Ownership & Responsibility</h3>
          <ul>
            <li>Took full ownership of features from idea to production</li>
            <li>Independently solved problems and made technical decisions</li>
            <li>Ensured UI/UX quality and system reliability</li>
            <li>Maintained and improved existing systems</li>
          </ul>
        </div>

        <div className="final-card">
          <h3>Collaboration & Communication</h3>
          <ul>
            <li>Worked closely with backend engineers</li>
            <li>Communicated effectively with Product Owners and Managers</li>
            <li>Translated business requirements into technical solutions</li>
            <li>Aligned technical decisions with product goals</li>
          </ul>
        </div>

        <div className="final-card highlight">
          <h3>Why I’m Ready for the Next Position</h3>
          <p>
            I am no longer focused only on writing code. I understand the full
            lifecycle of a product, from requirements and architecture to
            delivery and optimization. I am ready to take more responsibility,
            mentor others, and contribute at a higher level.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalSummary;
