import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ContentIndex = () => {

    const information = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "index" } }) {
          nodes {
            title
            content
            image {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);

    console.log(information);

    return ( 
        <>
            <h2>Title Page</h2>
        </>
     );
}
 
export default ContentIndex;