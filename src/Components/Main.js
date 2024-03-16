import React from 'react'
import Advertise from './SubComponents/Advertise'
import SpecialMenu from './SubComponents/SpecialMenu'
import Testemonial from './SubComponents/Testemonial'
import Info from './SubComponents/Info'

function Main() {
  return (
    <div>
        <Advertise/>
        <SpecialMenu/>
        <Testemonial/>
        <Info/>
    </div>
  )
}

export default Main;