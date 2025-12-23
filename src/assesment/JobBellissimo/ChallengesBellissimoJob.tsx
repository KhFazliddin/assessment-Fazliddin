import React from "react";
import "./ChallengesBellissimoJob.css";

// Global placeholder images
const placeholderImg1 =
  "https://dummyimage.com/400x200/00e5ff/111827.png&text=Job+Form";

const placeholderImg2 =
  "https://dummyimage.com/400x200/2563eb/ffffff.png&text=Animations";

function ChallengesBellissimoJob() {
  return (
    <section className="challenges-job">
      <h2 className="job-title">Bellissimo Jobs — Features & Challenges</h2>
      <p className="job-intro">
        I developed the recruitment platform, implementing interactive forms,
        animations, and backend integration for a smooth hiring experience.
      </p>

      <div className="job-grid">
        {/* FEATURE CARD */}
        <div className="job-card">
          <img src={placeholderImg1} alt="Job application form" />
          <div className="job-content">
            <h3>Job Application Form</h3>
            <p>
              Built interactive forms for job applications with real-time
              validation and seamless submission to the backend.
            </p>
            <ul>
              <li>Full backend integration for data submission</li>
              <li>Validation and error handling</li>
              <li>User-friendly design with animations</li>
              <li>Responsive and mobile-friendly interface</li>
            </ul>
          </div>
        </div>

        {/* ANIMATION / UX */}
        <div className="job-card">
          <img src={placeholderImg2} alt="Form animations and interactions" />
          <div className="job-content">
            <h3>Animations & Interactivity</h3>
            <ul>
              <li>Form field animations for better UX</li>
              <li>Loading states and feedback indicators</li>
              <li>Smooth transitions between form steps</li>
              <li>Improved user engagement and completion rate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesBellissimoJob;
