import React from 'react';
import NavigationBar from './components/NavigationBar';
import VisionPage from './components/Vision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurMission from './components/Mission';
import OurGoals from './components/Goals';
import AboutUs from './components/AboutUs';
import PostsPage from './components/Post';
import SinglePost from './components/SinglePost'; // Import the SinglePost component

function App() {
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
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:slug" element={<SinglePost />} /> {/* Add this line */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
