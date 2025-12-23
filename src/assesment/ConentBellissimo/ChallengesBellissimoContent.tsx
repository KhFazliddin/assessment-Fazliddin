import React from "react";
import "./ChallengesBellissimoContent.css";

// Sizda bor rasmlarni shu yerga almashtirasiz
import bannerImg from "../../images/content-banner.png";
import categoryImg from "../../images/content-category.png";

function ChallengesBellissimoContent() {
  return (
    <section className="content-challenges">
      <h2 className="content-title">
        Bellissimo Content — CMS & Client Website Integration
      </h2>

      <p className="content-intro">
        I worked on the internal Content Management System responsible for
        managing banners, categories, tags, and filters that directly control
        the Bellissimo Client Website.
      </p>

      {/* FEATURE 1 */}
      <div className="content-block">
        <div className="content-text">
          <h3>Banner Management System</h3>
          <p>
            Implemented the banner management feature where changes made in the
            Content system are instantly reflected on the main Client Website.
          </p>
          <ul>
            <li>Dynamic banner control from CMS</li>
            <li>Real-time content updates for Client Web</li>
            <li>Clean and scalable UI for content managers</li>
            <li>Backend integration for banner configuration</li>
          </ul>
        </div>

        <div className="content-image">
          <img src={bannerImg} alt="Banner management system" />
        </div>
      </div>

      {/* FEATURE 2 */}
      <div className="content-block reverse">
        <div className="content-text">
          <h3>Categories, Tags & Filters</h3>
          <p>
            Designed and developed category, tag, and filtering systems from
            scratch, focusing on usability and flexibility.
          </p>
          <ul>
            <li>Fully custom UI components</li>
            <li>Advanced filtering logic</li>
            <li>Optimized UX for content managers</li>
            <li>Scalable structure for future expansion</li>
          </ul>
        </div>

        <div className="content-image">
          <img src={categoryImg} alt="Category and filter management" />
        </div>
      </div>
    </section>
  );
}

export default ChallengesBellissimoContent;
