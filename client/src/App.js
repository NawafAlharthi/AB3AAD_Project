import React from 'react';
import NavigationBar from './components/NavigationBar';
import VisionPage from './components/Vision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurMission from './components/Mission';
import OurGoals from './components/Goals';
import PostsPage from './components/Post';
import SinglePost from './components/SinglePost'; // Import the SinglePost component
import AboutUsDevelopment from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/components/AboutUs/AboutUsDevelopment.jsx';
import AboutUsAdmin from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/components/AboutUs/AboutUsAdmin.jsx';
import AboutUsContent from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/components/AboutUs/AboutUsContent.jsx';
import AboutUs3DModeling from '/Users/nawaf/Desktop/AB3AAD_Project/client/src/components/AboutUs/AboutUs3DModeling.jsx';

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
          <Route path="/adminstration" element={<AboutUsAdmin />} />
          <Route path="/content" element={<AboutUsContent />} />
          <Route path="/3d" element={<AboutUs3DModeling />} />
          <Route path="/Dev" element={<AboutUsDevelopment />} />
          
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:slug" element={<SinglePost />} /> {/* Add this line */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
