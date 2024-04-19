import sanityClient from '@sanity/client';
import BlockContent from '@sanity/block-content-to-react';

export default sanityClient({
    projectId: '1v4b9ine',
    dataset: 'production', 
    useCdn: false
});