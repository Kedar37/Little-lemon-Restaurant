import React from 'react'
// import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Testemonial = () => {

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      profile: `https://robohash.org/johndoe?set=set2&size=60x60`,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida, ipsum nec ultricies lobortis, dui turpis sollicitudin nulla, nec efficitur mauris turpis sit amet velit."
    },
    {
      id: 2,
      name: "Jane Doe",
      profile: `https://robohash.org/janedoe?set=set2&size=60x60`,
      feedback: "Sed dictum purus sed nulla vehicula, a pharetra elit laoreet. Vestibulum vestibulum risus ac sapien posuere, nec fringilla arcu rhoncus. Pellentesque eget dolor nisi."
    },
    {
      id: 3,
      name: "Alice Smith",
      profile: `https://robohash.org/alicesmith?set=set2&size=60x60`,
      feedback: "Vivamus accumsan eros non nulla rhoncus, at consequat sem ultricies. Sed aliquam elit non sem euismod, sed egestas turpis euismod. Sed eget libero ut orci facilisis volutpat."
    },
    {
      id: 4,
      name: "John Cena",
      profile: `https://robohash.org/johncena?set=set2&size=60x60`,
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida, ipsum nec ultricies lobortis, dui turpis sollicitudin nulla, nec efficitur mauris turpis sit amet velit."
    },
    {
      id: 5,
      name: "Jane Martin",
      profile: `https://robohash.org/janemartin?set=set2&size=60x60`,
      feedback: "Sed dictum purus sed nulla vehicula, a pharetra elit laoreet. Vestibulum vestibulum risus ac sapien posuere, nec fringilla arcu rhoncus. Pellentesque eget dolor nisi."
    },
    {
      id: 6,
      name: "Alice Denver",
      profile: `https://robohash.org/alicedenver?set=set2&size=60x60`,
      feedback: "Vivamus accumsan eros non nulla rhoncus, at consequat sem ultricies. Sed aliquam elit non sem euismod, sed egestas turpis euismod. Sed eget libero ut orci facilisis volutpat."
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
    <div style={{margin: '0 7.5rem', overflow: 'visible'}}>
      <h2 style={{textAlign: 'center', marginBottom: '25px'}}>Customer Feedback</h2>
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div key={testimonial.id}>
          <div className="testimonial-card" 
          style={{padding: '15px', width: '290px', height: 'auto', border: '1px solid black', borderRadius:'16px'}}>
            <div style={{display: 'flex', alignItems:'center', height: '60px', marginBottom:'15px'}}>
              <img src={testimonial.profile} style={{border:'1px solid black', borderRadius: '50%'}} alt='profile'/>
              <div className="customer-name" style={{marginLeft: '10px'}}>{testimonial.name}</div>
            </div>
            <div className="customer-feedback" style={{height: '100px', width: '100%', maxHeight: 'auto', overflowY: 'scroll'}}>{testimonial.feedback}</div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
  );
};

export default Testemonial;