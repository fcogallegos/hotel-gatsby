import React from "react"
import Layout from '../components/layout';
import ImageHotel from '../components/imageHotel';
import ContentIndex from '../components/contentIndex';
import useRooms from '../hooks/use-rooms';


const IndexPage = () => {

  const rooms = useRooms();

  return (
    <Layout>
      <ImageHotel />
      
      <ContentIndex />
  
    </Layout>
  )
}

export default IndexPage
