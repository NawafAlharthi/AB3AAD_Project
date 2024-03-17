import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component

function VisionPage() {
  const randomSentence = 'To be a hub for those who are interested in integrating 3D printing in their speciality.';

  return (
    <ScrollReveal>
      <div className="vision-container">
        <h1 className="vision-title">Our Vision</h1>
        <p className="random-sentence">{randomSentence}</p>
      </div>
    </ScrollReveal>
  );
}

export default VisionPage;