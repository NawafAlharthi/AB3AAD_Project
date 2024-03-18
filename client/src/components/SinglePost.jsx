import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import ScrollReveal from './ScrollReveal'; 
import sanityClient from "../client.js"
import { Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}
export default function SinglePost(){
    const [singlePost, setSinglePost] = useState(null);
    const {slug} = useParam();

    useEffect(() => {
        sanityClient.fetch(`
        *[slug.current == "${slug}"] {
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author -> name,
            "authorImage": author -> image
        }]
        `).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>

    return (
        <main className='bg-grey-200 min-h-screen p-12'>
            <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
                <header className='relative'>
                    <div className='absolute h-full w-full flex items-center justifiy-center p-8'>
                        <div className='bg-white bg-opacity-75 rounded p-12'>
                        <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                            {singlePost.title}
                        </h1>
                        <div className='flex jusitify-center text-grey-800'>
                            <img src={urlFor(singlePost.authorImage).url()} 
                            alt={singlePost.name}/>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <img />

                </header>
                <header>
                    Block Content
                </header>
            </article>
        </main>
    )
}