import React from "react";
import "./ChallengesBellissimoReview.css";

// placeholder images, siz o'zingiz rasmlarni almashtirishingiz mumkin
import feedbackImg from "../../images/reviewBellissimo.png";
// import reviewStatsImg from "../../images/projects/review-stats.png";

function ChallengesBellissimoReview() {
  return (
    <section className="challenges-review">
      <h2 className="review-title">
        Bellissimo Review — Key Features & Challenges
      </h2>

      <p className="review-intro">
        I worked on the customer feedback platform, handling reviews,
        statistics, and categories. Implemented real-time updates using
        WebSockets for seamless user experience.
      </p>

      <div className="review-grid">
        {/* FEATURE CARD */}
        <div className="review-card">
          <img src={feedbackImg} alt="Customer feedback dashboard" />
          <div className="review-content">
            <h3>Customer Feedback Management</h3>
            <p>
              Built a system to manage customer reviews, categorize them, and
              display insights for better decision-making.
            </p>
            <ul>
              <li>Real-time updates using WebSockets</li>
              <li>Interactive dashboards for feedback statistics</li>
              <li>Categorization of reviews for easy filtering</li>
              <li>Optimized frontend for performance with large datasets</li>
            </ul>
          </div>
        </div>

        {/* CHALLENGES & LEARNINGS */}
        <div className="review-card">
          <img src={feedbackImg} alt="Feedback statistics charts" />
          <div className="review-content">
            <h3>Challenges & Learnings</h3>
            <ul>
              <li>
                Handling live updates and state management with WebSockets
              </li>
              <li>Displaying complex data in charts and tables efficiently</li>
              <li>
                Collaborating with backend for accurate review data and
                real-time notifications
              </li>
              <li>
                Improved skills in real-time web applications and data
                visualization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesBellissimoReview;
