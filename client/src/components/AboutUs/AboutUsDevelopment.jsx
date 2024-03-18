import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../App.css'; // Make sure this path is correct for your project structure
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import image1 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/1.png';
import image2 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/2.png';
import image3 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/3.png';
import image4 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/4.png';
import image5 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/5.png';
import image6 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/6.png';
import image7 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/7.png';
import image8 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/8.png';
import image9 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/9.png';
import image10 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/10.png';
import image11 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/11.png';
import image12 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/12.png';
import image13 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/13.png';
import image14 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/14.png';
import image15 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/15.png';
import image16 from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/Team/Unkown.png';

function AboutUs() {
  const teamMembers = [
      {
        img: image7,
        name: 'Shadell Alghamdi',
        position: 'Development Team Member',
        linkedin: 'https://www.linkedin.com/in/shadell-alghamdi-9a9362284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image3,
        name: 'Fares Fatani',
        position: 'Development Team Member',
        linkedin: '',
      },
  ];

  

  // Define animation variants for the reveal
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="AboutUs-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="AboutUs-title">Meet Our Team</h1>
      </motion.div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <motion.div 
            className="team-member" 
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={member.img} alt={member.name} className="team-member-image" />
            <div className="team-member-info">
              <div className="team-member-name-and-link">
                <motion.h2 
                  className="team-member-name"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {member.name}
                </motion.h2>
                <SocialIcon 
                  url={member.linkedin} 
                  className="team-member-linkedin" 
                  network="linkedin" 
                  style={{ height: 25, width: 25, marginLeft: '10px' }} // Adjusted to add space on the left
                />
              </div>
              <motion.p 
                className="team-member-position"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {member.position}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;