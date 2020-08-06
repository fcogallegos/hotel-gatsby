import React from "react"
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ImageHotel from '../components/imageHotel';
import ContentIndex from '../components/contentIndex';
import RoomPreview from '../components/roomPreview';
import useRooms from '../hooks/use-rooms';


const IndexPage = () => {

  const rooms = useRooms();

  console.log(rooms);

  return (
    <Layout>
      <ImageHotel />
      
      <ContentIndex />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our Rooms</h2>

      <ul>
        {rooms.map(room => (
          <RoomPreview />
        ))}
      </ul>

    </Layout>
  )
}

export default IndexPage
