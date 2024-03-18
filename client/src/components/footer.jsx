import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      marginTop: '2rem',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #e1e1e1', 
      color: '#333', 
      fontFamily: '"Arial", sans-serif', 
    }}>
      {/* Make the following paragraph larger */}
      <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>© 2024 All rights reserved.</p>
      <p style={{ margin: '0.5rem 0', fontSize: '0.8rem' }}>Made With <span style={{ color: '#e25555' }}>❤️</span> By CEONawaf
        <a href="https://github.com/NawafAlharthi" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px', color: '#333' }}>
          <FaGithub />
        </a>
        <a href="https://twitter.com/CEONawaf" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px', color: '#1DA1F2' }}>
          <FaTwitter />
        </a>
      </p>
    </footer>
  );
};

export default Footer;