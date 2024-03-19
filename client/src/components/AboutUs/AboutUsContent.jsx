import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../App.css'; // Make sure this path is correct for your project structure
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import image1 from '../AboutUs/Team/1.png';
import image2 from '../AboutUs/Team/2.png';
import image3 from '../AboutUs/Team/3.png';
import image4 from '../AboutUs/Team/4.png';
import image5 from '../AboutUs/Team/5.png';
import image6 from '../AboutUs/Team/6.png';
import image7 from '../AboutUs/Team/7.png';
import image8 from '../AboutUs/Team/8.png';
import image9 from '../AboutUs/Team/9.png';
import image10 from '../AboutUs/Team/10.png';
import image11 from '../AboutUs/Team/11.png';
import image12 from '../AboutUs/Team/12.png';
import image13 from '../AboutUs/Team/13.png';
import image14 from '../AboutUs/Team/14.png';
import image15 from '../AboutUs/Team/15.png';
import image16 from '../AboutUs/Team/Unkown.png';



function AboutUs() {
  const teamMembers = [
    {
      img: image5,
      name: 'Hussam Alasmari',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Haneen Abanmi',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Nessren Zanoum',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Saud Alqahtani',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Rasha Alrefaie',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Sara Alghamdi',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Abdulrahman Aldahash',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image16,
      name: 'Razan Alnghaimshi',
      position: 'Content Team Member - Medical Division',
      linkedin: ''
    },
    {
      img: image14,
      name: 'Sadiq Albader',
      position: 'Content Team Member - Mechanical Division',
      linkedin: 'https://www.linkedin.com/in/sadiq-albader?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      img: image16,
      name: 'Fawaz Altheeb',
      position: 'Content Team Member - Mechanical Division',
      linkedin: '' // Add LinkedIn URL if available
    },
    {
      img: image16,
      name: 'Kawthar Alnahwi',
      position: 'Content Team Member - Mechanical Division',
      linkedin: '' // Add LinkedIn URL if available
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