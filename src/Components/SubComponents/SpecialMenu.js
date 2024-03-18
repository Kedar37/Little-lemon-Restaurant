import React from 'react'
import styled from 'styled-components';

function SpecialMenu() {
  return (
    <Container>
      <CardContainer>
        <Head>
          <Heading>Special Menu</Heading>
          <ViewMore>view more</ViewMore>
        </Head>
        <CardBox>
          <Card>
            <FoodImg src='/Images/greek salad.jpg' alt=''/>
            <FoodDetail>
              <Title>Lemon Dessert</Title>
              <Price>$10.50</Price>
            </FoodDetail>
            <Details>
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
            </Details>
            <OrderBtn>Order Now</OrderBtn>
          </Card>
          <Card>
            <FoodImg src='/Images/lemon dessert.jpg' alt=''/>
            <FoodDetail>
              <Title>Lemon Dessert</Title>
              <Price>$10.50</Price>
            </FoodDetail>
            <Details>
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
            </Details>
            <OrderBtn>Order Now</OrderBtn>
          </Card>
          <Card>
            <FoodImg src='/Images/bruchetta.svg' alt=''/>
            <FoodDetail>
              <Title>Lemon Dessert</Title>
              <Price>$10.50</Price>
            </FoodDetail>
            <Details>
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
              Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
            </Details>
            <OrderBtn>Order Now</OrderBtn>
          </Card>
        </CardBox>
      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 500px;
`;

const CardContainer = styled.div`
  margin: 3rem 7.5rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;

const Heading = styled.h2`
  font-size: 28px;
`;

const ViewMore = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 16px;
  background-color: #F4CE14;
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #EE9972;
    color: white;
    cursor: pointer;
  }
`;

const CardBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 290px;
  height: auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #EDEFEE;
`;

const FoodImg = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
border-radius: 16px;
margin-bottom: 15px;
`;

const FoodDetail = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

const Title = styled.h3`
`;

const Price = styled.h3`
color: #EE9972;
`;

const Details = styled.p`
  width: 100%;
  height: 75px;
  overflow-y: scroll;
  max-height: auto;
  margin-bottom: 15px;
  font-size: 13px;

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0; /* Color of the thumb */
    border-radius: 5px; /* Radius of the thumb */
    cursor: pointer;
  }
`;

const OrderBtn = styled.button`
width: 100%;
font-size: 16px;
color: white;
padding: 10px;
background-color: #495E57;
border-radius: 16px;
border: none;
outline: none;
transition: background-color 0.3s;

  &:hover {
    background-color: #679888;
    color: white;
    cursor: pointer;
  }
`;

export default SpecialMenu;