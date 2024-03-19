import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Advertise() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  }

  return (
    <Container>
      <ContentBox>
        <Content>
          <Title>Little Lemon</Title>
          <BranchName>Chicago</BranchName>
          <AdContent>Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
          Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
          Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
          </AdContent>
          <ReserveBtn onClick={handleClick}>Reserve Table</ReserveBtn>
        </Content>
        <AdImg><Img src='/Images/restauranfood.jpg' alt='restaurant'/></AdImg>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 400px;
  margin: 3rem 0;
`;


const ContentBox = styled.div`  
  display: flex;
  justify-content: center;
  gap: 30px;
`;


const Content = styled.div`
  width: 520px;
  height: 380px;
`;


const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 10px;
`;

const BranchName = styled.h3`
  font-size: 26px;
  margin-bottom: 26px;
`;

const AdContent = styled.p`
  width: 100%;
  height: 140px;
  overflow-y: scroll;
  max-height: auto;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0; /* Color of the thumb */
    border-radius: 5px; /* Radius of the thumb */
    cursor: pointer;
  }
`;

const ReserveBtn = styled.button`
  font-size: 24px;
  font-weight: 500;
  padding: 10px 80px;
  border-radius: 16px;
  background-color: #F4CE14;
  color: #495E57;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #495E57;
    color: white;
    cursor: pointer;
  }
`;

const AdImg = styled.div`
width: 520px;
height: 380px;
border-radius: 16px;
object-fit: cover;
`;

const Img = styled.img`
width: 520px;
height: 380px;
border-radius: 16px;
object-fit: cover;
`;

export default Advertise;