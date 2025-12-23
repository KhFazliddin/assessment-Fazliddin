import React from "react";
import "./CurrentJob.css";

function CurrentJob() {
  return (
    <section className="currentJob">
      <h2 className="currentJob-title">Current Role & Responsibilities</h2>

      <div className="currentJob-wrapper">
        {/* LEFT: Role info */}
        <div className="currentJob-main">
          <h3>Frontend Engineer</h3>
          <span className="company">Bellissimo Pizza International</span>

          <p className="description">
            As a Frontend Engineer, I take full ownership of product features —
            from initial requirements to production delivery. My focus is on
            building scalable, performant, and user-friendly solutions that
            align with both technical and business goals.
          </p>

          <div className="tags">
            <span>Feature Ownership</span>
            <span>Production Ready</span>
            <span>Performance</span>
            <span>Architecture</span>
          </div>
        </div>

        {/* RIGHT: Responsibilities */}
        <div className="currentJob-details">
          <h4>Key Responsibilities</h4>
          <ul>
            <li>
              Designing and developing frontend features and delivering them to
              production
            </li>
            <li>
              Managing dependencies with backend services and integrating APIs
              effectively
            </li>
            <li>
              Collaborating with Product Owners and Project Managers to clarify
              requirements and timelines
            </li>
            <li>
              Participating in frontend architecture discussions and technical
              decision-making
            </li>
            <li>
              Continuously optimizing performance, code quality, and user
              experience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CurrentJob;
