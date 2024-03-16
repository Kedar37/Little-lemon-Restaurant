import React from 'react'
import styled from 'styled-components'

function Info() {
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
        </Content>
        <AdImg><Img src='/Images/restaurant chef B.jpg' alt='restaurant'/></AdImg>
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
  margin=bottom: 10px;
`;

const BranchName = styled.h3`
  font-size: 26px;
  margin-bottom: 26px;
`;

const AdContent = styled.p`
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  max-height: auto;
  margin-bottom: 38px;
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

export default Info;