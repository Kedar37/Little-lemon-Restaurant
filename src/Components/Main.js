import React from 'react'
import Advertise from './SubComponents/Advertise'
import SpecialMenu from './SubComponents/SpecialMenu'
import Testemonial from './SubComponents/Testemonial'
import Info from './SubComponents/Info'
import styled from 'styled-components'

function Main() {
  return (
    <div>
        <Advertise/>
        <Divider/>
        <SpecialMenu/>
        <Divider/>
        <Testemonial/>
        <TestiDivider className='testimonial'/>
        <Info/>
    </div>
  )
}

const Divider = styled.div`
height: 2px;
border-radius: 2px;
background-color: gray;
margin: 2rem 7.5rem;
`;

const TestiDivider = styled.div`
height: 2px;
border-radius: 2px;
background-color: gray;
margin: 4rem 7.5rem 2rem 7.5rem;
`;

export default Main;