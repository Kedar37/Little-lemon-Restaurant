import React from 'react'
import Footer from '../Components/Footer'

function Order() {

  const style = {
    justifyContent: 'center',
    color: 'white', 
    display: 'flex', 
    alignItems: 'center', 
    margin: '2rem auto', 
    borderRadius: '16px'
  }
  
  const bg = {
    width: '100vw',
    height: '80vh',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'relative'
  }

  return (
    <>
    <div style={bg}>
      <div style={style}>
        <img src='/Images/cont.gif' alt='construction' width={'450px'} height={'450px'} />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Order;