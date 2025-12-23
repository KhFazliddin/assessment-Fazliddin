import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./assesment/Header/Header";
import Education from "./assesment/Education/Education";
import Agenda from "./assesment/Agenda/Agenda";
import CurrentJob from "./assesment/CurrentJob/CurrentJob";
import ProjectsBellissimo from "./assesment/ProjectsBellissimo/ProjectsBellissimo";
import ChallengesClientWeb from "./assesment/ClientWeb/ChallengesClientWeb";
import ChallengesBellissimoReview from "./assesment/ReviewBellissimo/ChallengesBellissimoReview";
import ChallengesBellissimoJob from "./assesment/JobBellissimo/ChallengesBellissimoJob";
import ChallengesBellissimoContent from "./assesment/ConentBellissimo/ChallengesBellissimoContent";
import FinalSummary from "./assesment/FinalSummary/FinalSummary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Agenda />
        <Education />
        <CurrentJob />
        <ProjectsBellissimo />
        <ChallengesClientWeb />
        <ChallengesBellissimoReview />
        <ChallengesBellissimoJob />
        <ChallengesBellissimoContent />
        <FinalSummary />
      </header>
    </div>
  );
}

export default App;
