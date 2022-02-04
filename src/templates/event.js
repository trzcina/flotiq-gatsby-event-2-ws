import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const EventTemplate = ({ data }) => {
    const { event } = data;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div>Event</div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query EventBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        event( slug: { eq: $slug } ) {
            id
            name
            slug
            address
            date
            description
            gallery {
                localFile {
                  publicURL
                }
            }
        }
    }
`;

export default EventTemplate;
