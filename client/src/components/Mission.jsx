import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component
import missionImage from '../img/mission.gif'; // Update the relative path to the location of the image

function OurMission() {
  const randomSentence = 'To provide evidence-based information and hands-on training in a simplified manner to enable youth to utilize 3D printing in alignment with their speciality duties.';
  return (
    <ScrollReveal>
      <div className="mission-container">
        <h1>Our Mission</h1>
        <p className="random-sentence">{randomSentence}</p>
        <img src={missionImage} alt="Our Mission" className="res-gif" /> {/* Add this line to include the image */}
      </div>
    </ScrollReveal>
  );
}

export default OurMission;