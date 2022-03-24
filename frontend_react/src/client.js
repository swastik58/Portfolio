import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'dvw1pwnh',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skqGLc7VnxeIggY5FcCrWI3tQVQ65AMG0JuJEysu0wKBmvaeTpM0BDrFVpkKfF2Az3LV2ymZInw3DhPQbqXj20QJMjL3OZwwncky1ei3fitOW434XJ8gV4VukrHeFa4NNuU0MGhqdLz1Q4JxM8HlkykFYSPsD4nLWo6I2L0zO8x19BMVCyHv',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);