import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'coih427x',
    dataset: 'production', 
    useCdn: false
});