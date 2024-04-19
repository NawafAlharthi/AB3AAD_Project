// App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import VisionPage from './components/Vision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurMission from './components/Mission';
import OurGoals from './components/Goals';
import PostsPage from './components/Post';
import SinglePost from './components/SinglePost';
import BlockContent from '@sanity/block-content-to-react';
import PostsPageM from './components/PostM.jsx'
import SinglePostM from './components/SinglePostM';

import AboutUsDevelopment from '../../client/src/components/AboutUs/AboutUsDevelopment.jsx';
import AboutUsAdmin from '../../client/src/components/AboutUs/AboutUsAdmin.jsx';
import AboutUsContent from '../../client/src/components/AboutUs/AboutUsContent.jsx';
import AboutUs3DModeling from '../../client/src/components/AboutUs/AboutUs3DModeling.jsx';
import Footer from './components/footer'; // Import the Footer component

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
          <Route path="/post/:slug" element={<SinglePost />} />

          <Route path="/postsM" element={<PostsPageM />} />
          <Route path="/postM/:slug" element={<SinglePostM />} />

        </Routes>
        <Footer /> {}
      </div>
    </BrowserRouter>
  );
}

export default App;