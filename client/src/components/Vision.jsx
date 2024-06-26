import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component
import firstGif from '../img/xxx.gif'; // Import the GIF

function VisionPage() {
  const randomSentence = 'To be a hub for those who are interested in integrating 3D printing in their speciality.';

  return (
    <ScrollReveal>
      <div className="vision-container">
        <h1 className="vision-title">Our Vision</h1>
        <p className="random-sentence">{randomSentence}</p>
        <img src={firstGif} alt="Description of GIF" className="responsive-gif"/> {/* Use className for styling */}
      </div>
    </ScrollReveal>
  );
}

export default VisionPage;