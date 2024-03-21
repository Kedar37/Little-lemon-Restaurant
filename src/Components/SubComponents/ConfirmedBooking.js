import React from 'react'

function ConfirmedBooking() {

  const bg = {
    width: '100vw',
    height: '80vh',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'relative'
  }

  return (
    <div style={bg}>
      <img src='/Images/confirm.gif' alt='construction' width={'300px'} height={'300px'} />
      <h2>Your Reservation has been completed! We will contact you shortly!</h2>
    </div>
  )
}

export default ConfirmedBooking