import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc: any) {
    switch (doc.type) {
        case 'articles':
            return '/';
        case 'about':
            return `/about`;
        case 'contact':
            return `/contact`;
        default:
            return null;
    }
}

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
    const client = prismic.createClient(sm.apiEndpoint, config);

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};
