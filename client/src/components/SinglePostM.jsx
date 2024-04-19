import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styless.css'; // Import the external CSS file
import ScrollReveal from './ScrollReveal.jsx';
import sanityClient from "../clientM.js";
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`
            *[slug.current == $slug]{
                title,
                "name": author->name,
                "authorImage": author->image,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                body
            }
        `, { slug })
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div></div>;

    return (
        <ScrollReveal>
            <main className='single-post-container'>
                <article className='article-container'>
                    <header className='article-header'>
                        {singlePost.mainImage && singlePost.mainImage.asset && (
                            <img 
                                src={urlFor(singlePost.mainImage).url()} 
                                alt={singlePost.mainImage.alt || singlePost.title} 
                                className='article-image' 
                            />
                        )}
                        <div className='absolute h-full w-full flex items-center justify-center p-8'>
                            <div className='bg-white bg-opacity-75 rounded p-12'>
                                <h1 className='article-title'>
                                    {singlePost.title}
                                </h1>
                                <div className='flex justify-center text-grey-800'>
                                    {singlePost.authorImage && (
                                        <img 
                                            src={urlFor(singlePost.authorImage).url()} 
                                            alt={singlePost.name}
                                            className='article-author-image'
                                        />
                                    )}
                                </div>
                                <p className='article-author-name'>
                                    {"Author's Name: " + singlePost.name}
                                </p>
                            </div>
                        </div>
                    </header>
                    <div className='article-body'>
                        <BlockContent 
                            blocks={singlePost.body} 
                            projectId='coih427x'
                            dataset='production'
                        />
                    </div>
                </article>
            </main>
        </ScrollReveal>
    );
};

export default SinglePost;