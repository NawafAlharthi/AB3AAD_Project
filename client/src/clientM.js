import sanityClient from '@sanity/client';
import BlockContent from '@sanity/block-content-to-react';

export default sanityClient({
    projectId: 'coih427x',
    dataset: 'production', 
    useCdn: false
});