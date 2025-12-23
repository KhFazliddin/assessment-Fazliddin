import React from "react";
import fdn from "../../images/image.png";
import "./Education.css";

function Education() {
  return (
    <section className="education">
      <div className="education-container">
        <div className="education-image">
          <img src={fdn} alt="Fazliddin Khasanov" />
        </div>

        <div className="education-content">
          <h2 className="section-title">Education & Background</h2>

          <h4 className="role">
            Frontend Engineer / Software Developer
          </h4>

          <p>
            I have completed a comprehensive Full Stack Development program that
            provided a strong foundation in both frontend and backend
            technologies. Throughout my education, I focused on building
            scalable, maintainable, and user-centric web applications.
          </p>

          <p>
            My technical training includes modern JavaScript (ES6+), React,
            state management, RESTful APIs, and responsive UI development. This
            background has enabled me to approach problems with an engineering
            mindset and deliver clean, production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
