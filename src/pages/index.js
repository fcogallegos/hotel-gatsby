import React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import ImageHotel from '../components/imageHotel';
import ContentIndex from '../components/contentIndex';
import RoomPreview from '../components/roomPreview';
import useRooms from '../hooks/use-rooms';


const ListedRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;


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

      <ListedRooms>
        {rooms.map(room => (
          <RoomPreview 
            id={room.id}
            room={room}
          />
        ))}
      </ListedRooms>

    </Layout>
  )
}

export default IndexPage
