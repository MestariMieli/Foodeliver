import imageUrlBuilder from '@sanity/image-url'


const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: "hq9c4185",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-12-02",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
