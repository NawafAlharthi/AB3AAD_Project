import React, { useState, useEffect } from 'react';
import '../App.css';
import ScrollReveal from './ScrollReveal.jsx'; 
import sanityClient from "../clientM.js"
import { Link } from 'react-router-dom';

export default function Posts() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
        .fetch(
          `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
  }, []);

  return (
    
    <ScrollReveal>
      <main className='main-container'>
        <section className='posts-containerr'>
          <h1 className='posts-title'>Our Publications (Mechanical)</h1>
          <h2 className='posts-subtitle'></h2>
          <div className='posts-grid'>
            {postData && postData.map((post, index) => (
              <article className='post-article' key={post.slug.current}>
                <Link to={"/postM/" + post.slug.current}>
                  <span className='post-article-content'>
                    <img 
                    src={post.mainImage.asset.url} 
                    alt={post.mainImage.alt} 
                    className="post-imaged"/>
                    <h3 className="post-title">
                      {post.title}
                    </h3>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </ScrollReveal>
  );}