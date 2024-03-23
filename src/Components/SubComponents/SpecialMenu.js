import React, {useState, useEffect} from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';

function SpecialMenu() {

  const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const menuCollection = collection(db, 'Menu-items')
            const q = query(menuCollection, where("type", "==", "specials"))
            const snapshot = await getDocs(q);
            const menuData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setItems(menuData);
        }
        fetchItems();
    }, []);

  return (
    <Container>
      <CardContainer>
        <Head>
          <Heading>Special Menu</Heading>
          <ViewMore>view more</ViewMore>
        </Head>
        <CardBox>
          {items.map(item => (
          <Card key={item.id}>
            <img src={item.img} alt={item.title}
            style={{width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '16px',
              marginBottom: '15px'}}/>
            <FoodDetail>
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
            </FoodDetail>
            <Details>{item.description}</Details>
            <OrderBtn>Order Now</OrderBtn>
          </Card>
          ))}
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
  gap: 20px;
`;

const Card = styled.div`
  width: 250px;
  height: auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #EDEFEE;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.03);
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  }
`;

// const FoodImg = styled.img`
// width: 100%;
// height: 150px;
// object-fit: cover;
// border-radius: 16px;
// margin-bottom: 15px;
// `;

const FoodDetail = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

const Title = styled.h3`
width: 150px;
font-size: 18px;
`;

const Price = styled.h3`
font-size: 18px;
color: #EE9972;
`;

const Details = styled.p`
  width: 100%;
  height: 60px;
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