import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ImageHotel = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "8.jpg" }){
          sharp: childImageSharp {
            fluid {
              srcSetWebp
            }
          }
        }
      }
    `);

    console.log(image);
    
    return ( <h1>Image here</h1> );
}
 
export default ImageHotel;