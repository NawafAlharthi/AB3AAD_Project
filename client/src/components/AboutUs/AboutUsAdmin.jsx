import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../App.css'; // Adjust the path as necessary based on your project structure // Make sure this path is correct for your project structure
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
import image17  from '../AboutUs/Team/44.png';

function AboutUsAdmin() {
  const teamMembers = [
      {
        img: image1,
        name: 'Rafy Alharthi',
        position: 'Founder and President',
        linkedin: 'https://www.linkedin.com/in/rafy-s-alharthi-718080195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image2,
        name: 'Saeed Baghdadi',
        position: 'Deputy',
        linkedin: 'https://www.linkedin.com/in/saeed-baghdadi-8b8100211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        
      },
      {
        img: image6,
        name: 'Nawaf Alharthi',
        position: 'Advisor',
        linkedin: 'https://www.linkedin.com/in/nawafalharthii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image11,
        name: 'Noura Alzaid',
        position: 'Advisor',
        linkedin: 'https://www.linkedin.com/in/noura-alzaid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image12,
        name: 'Noura Abuthiyab',
        position: 'Advisor',
        linkedin: 'https://www.linkedin.com/in/noura-abuthiyab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image10,
        name: 'Nouf Albattal',
        position: 'Head of Content',
        linkedin: 'https://www.linkedin.com/in/nouf-albattal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image13,
        name: 'Houssam Alhawsawi',
        position: 'Head of Planning',
        linkedin: 'https://www.linkedin.com/in/housam-alhoussawi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image15,
        name: 'Hadeel Alghanim',
        position: 'Head of Media',
        linkedin: 'https://www.linkedin.com/in/sadiq-albader?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image16,
        name: 'Bassam Fatani',
        position: 'Head of Media',
        linkedin: ''
      },
      {
        img: image17,
        name: 'Tayef Alsayed',
        position: 'Head of Media',
        linkedin: 'https://www.linkedin.com/in/taif-alsayed-864201139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image8,
        name: 'Juwain Assahafi',
        position: 'Head Of Content',
        linkedin: 'https://www.linkedin.com/in/juwain-assahafi-12641b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      {
        img: image4,
        name: 'Esra Turkistani',
        position: 'Head of 3D modeling',
        linkedin: ''
      },
      {
        img: image16, // Assuming image16 is the correct path for Basem Alzhrani's picture
        name: 'Basem Alzhrani',
        position: 'Head of Quality',
        linkedin: '' // Since Basem does not have a LinkedIn account, this is set to an empty string
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

export default AboutUsAdmin;