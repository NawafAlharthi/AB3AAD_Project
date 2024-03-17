import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component

function OurMission() {
  const randomSentence = 'To provide evidence-based information and hands-on training in a simplified manner to enable youth to utilize 3D printing in alignment with their speciality duties.';
  return (
    <ScrollReveal>
      <div className="mission-container">
        <h1>Our Mission</h1>
        <p className="random-sentence">{randomSentence}</p>
      </div>
    </ScrollReveal>
  );
}

export default OurMission;