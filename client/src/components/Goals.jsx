import React from 'react';
import '../App.css'; // Update the relative path to the location of App.css
import ScrollReveal from './ScrollReveal'; // Ensure you import the ScrollReveal component

function OurGoals() {
  const randomSentence = 'To introduce the concept of adopting this technology in each field in order to ease visualization, facilitate creativity, and reach cost-effectiveness';

  return (
    <ScrollReveal>
      <div className="goals-container">
        <h1>Our Goals</h1>
        <p className="random-sentence">{randomSentence}</p>
      </div>
    </ScrollReveal>
  );
}

export default OurGoals;