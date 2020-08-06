import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {
    
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
              nodes {
                title
                id
                slug
                content
                image {
                  fluid(maxWidth: 1200) {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
    `);

    console.log(data);
    
}
 
export default useRooms;