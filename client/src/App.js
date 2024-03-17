import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import VisionPage from './components/Vision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurMission from './components/Mission';
import OurGoals from './components/Goals';
import AboutUs from './components/AboutUs';
import PostsPage from './components/Post'; // Import the new PostsPage component

function App() {
  // ... (other states and functions remain unchanged)

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={
            <>
              <VisionPage />
              <OurMission />
              <OurGoals />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/posts" element={<PostsPage />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;