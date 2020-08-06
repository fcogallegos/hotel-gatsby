import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const IndexText = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem; 
    }

    p {
      text-align: justify;
      line-height: 2;
    }
`;

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

    //console.log(information.allDatoCmsPage.nodes[0]);

    const { title, content, image } = information.allDatoCmsPage.nodes[0];

    return ( 
        <>
            <h2
              css={css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
              `}
            >{title}</h2>

            <IndexText>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </IndexText>
        </>
     );
}
 
export default ContentIndex;