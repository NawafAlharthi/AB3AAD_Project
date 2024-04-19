import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component
import firstGif from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/img/xxx.gif'; // Import the GIF

function VisionPage() {
  const randomSentence = 'To be a hub for those who are interested in integrating 3D printing in their speciality.';

  return (
    <ScrollReveal>
      <div className="vision-container">
        <h1 className="vision-title">Our Vision</h1>
        <p className="random-sentence">{randomSentence}</p>
        <img src={firstGif} alt="Description of GIF" width="750" height="600"/> {/* Display the GIF with specified dimensions */}
      </div>
    </ScrollReveal>
  );
}

export default VisionPage;