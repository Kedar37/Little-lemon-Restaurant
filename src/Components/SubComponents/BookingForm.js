import React, {useState} from 'react'
import styled from 'styled-components'
// import { fetchAPI } from '../../Api'
import {useNavigate} from 'react-router-dom'

function BookingForm() {

    const [fullname, setFullName] = useState('')
    const [contact, setContact] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('Not Set')
    const [guest, setGuest] = useState('')
    const [occasion, setOccasion] = useState('occasion')

    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [bookedTimes, setBookedTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');

    const navigate = useNavigate();
  
    const handleDateChange = (e) => {
      const selectedDate = new Date(e.target.value);
      updateAvailableTimes(selectedDate);
    };
  
    const updateAvailableTimes = (date) => {
      const dayOfWeek = date.getDay();
      let times;
      switch (dayOfWeek) {
        case 0: 
          times = ['10:00', '12:00', '14:00', '16:00'];
          break;
        case 6: 
          times = ['12:00', '14:00', '16:00', '18:00'];
          break;
        default: 
          times = ['09:00', '11:00', '13:00', '15:00', '17:00'];
          break;
      }
  
      const availableTimes = times.filter((time) => !bookedTimes.includes(time));
      setAvailableTimes(availableTimes);
      setSelectedDate(date);
      setSelectedTime('');
    };

    const handleBooking = (e) => {
        e.preventDefault();
        const selectedTimeString = selectedTime;
    
        if (bookedTimes.includes(selectedTimeString)) {
          alert('This time slot is already booked. Please choose another time.');
        } else {
          setBookedTimes([...bookedTimes, selectedTimeString]);
          // Perform additional booking logic here
          console.log('Booking submitted for:', selectedDate, selectedTimeString);
        }
        ClearForm();
      };

    const FormValidation = () => {
        return (
            fullname &&
            contact &&
            date &&
            time !== 'Not Set' &&
            guest &&
            occasion !== 'occasion'
        )
    }

    const ClearForm = () => {
        setFullName('');
        setContact('');
        setDate('');
        setTime('Not Set');
        setGuest('');
        setOccasion('occasion');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Your reservation has been confirmed! We will contact you shortly!!")
        navigate('/confirmed-booking')
        ClearForm();
    }

    const currentDate = new Date().toISOString().split("T")[0]

    return (
        <Container>
            <FormImg src='/Images/restauranfood.jpg' alt='foodimg'/>
            <FormContainer>
                <h2 style={{textAlign: 'center'}}>Reserve Table</h2>
                <Form onSubmit={handleSubmit}>
                    {/* <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '30px 0', gap: '20px'}}>
                        <div>
                        <Label htmlFor='enter-name'>Enter Name</Label>
                            <Input 
                                type='text' 
                                id='enter-name'
                                value={fullname}
                                onChange={(e) => setFullName(e.target.value)}
                                required min={2}
                                placeholder='Enter Full Name'
                                />
                        </div>
                        <div>
                        <Label htmlFor='contact'>Contact No.</Label>
                            <Input 
                                type='number' 
                                id='contact'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required min={10}
                                placeholder='123-456-7890'
                                />
                        </div>
                    </div> */}
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '30px 0', gap: '20px'}}>
                        <div>
                            <Label htmlFor='reserve-date'>Choose Date</Label>
                            <Input 
                                type='date' 
                                id='reserve-date'
                                // value={date}
                                onChange={handleDateChange}
                                required min={currentDate}
                                />
                        </div>
                        <div>
                            <Label htmlFor='reserve-time'>Choose Time</Label>
                            <Select 
                                id='reserve-time'
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                >
                                <Option disabled={true}>Not Set</Option>
                                {availableTimes.map((time, index) => (
                                <Option key={index} value={time}>
                                    {time}
                                </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '30px 0', gap: '20px'}}>
                        <div>
                            <Label htmlFor='guests'>Number of Guests</Label>
                            <Input 
                                type='number' 
                                placeholder='1' 
                                min={1} 
                                max={10} 
                                id='guests'
                                value={guest}
                                onChange={(e) => setGuest(e.target.value)}
                                required
                                />
                        </div>
                        <div>
                            <Label htmlFor='occasion'>Occasion</Label>
                            <Select 
                                id='occasion'
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                                >
                                <Option disabled={true}>occasion</Option>
                                <Option>Birthday</Option>
                                <Option>Anniversary</Option>
                                <Option>Party</Option>
                            </Select>
                        </div>
                    </div>
                    <Input 
                        type='submit' 
                        value="Reserve Table" 
                        // disabled={!FormValidation()}
                        style={{width: '100%'}} />
                    {/* {FormValidation && (
                    <Button>Make Reservation</Button>
                    )} */}
                </Form>
            </FormContainer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: auto;
`;

const FormImg = styled.img`
width: 600px;
height: 300px;
object-fit: cover;
margin: 2rem 0 2rem 2rem;
border-radius: 16px 0 0 0;
`;

const FormContainer = styled.div`
margin: 2rem 2rem 2rem 0;
// border: 2px solid black;
background-color: #ffecc4;
border-radius: 0 0 16px 0;
// box-shadow: 0px 0px 10px 12px lightgray;
padding: 20px;
`;

const Form = styled.form`

`;

const Label = styled.label`
font-weight: bold;
font-size: 16px;
margin-right: 20px;
`;

const Input = styled.input`
width: auto;
padding: 10px;
border: 1.5px solid gray;
border-radius: 10px;
`;

// const Button = styled.button`
// width: 100%;
// padding: 10px;
// border: 1.5px solid gray;
// border-radius: 10px;
// `;

const Select = styled.select`
max-width: 200px;
padding: 10px;
border: 1.5px solid gray;
border-radius: 10px;
border-radius: 10px;
`;

const Option = styled.option`
max-width: 200px;
padding: 10px;
border: 1.5px solid gray;
border-radius: 10px;
border-radius: 10px;
`;


export default BookingForm