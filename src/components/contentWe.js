import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';


const ContentWe = () => {

    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "we" } }) {
          nodes {
            title
            content
            image {
              fluid( maxWidth: 1200 ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);

    console.log(result.allDatoCmsPage.nodes[0]);

    const { title, content, image } = result.allDatoCmsPage.nodes[0]

    return ( 
        <>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
                <Image 
                    fluid={image.fluid}
                    
                />
            </div>
        </>
     );
}
 
export default ContentWe;