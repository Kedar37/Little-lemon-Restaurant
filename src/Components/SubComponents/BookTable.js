import './BookTable.css'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function BookTable() {

    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
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
            email &&
            contact &&
            date &&
            time !== 'Not Set' &&
            guest &&
            occasion !== 'occasion'
        )
    }

    const ClearForm = () => {
        setFullName('');
        setEmail('');
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
    <>
    <div className='container'>
        <div className='formContainer'>
            <div className='title'>
                <h3>Reserve Table</h3>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='name'>Full Name :</label>
                        <input type='text' id='name' required min={2} 
                            value={fullname} onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <div className='info'>
                        <div className='email'>
                            <label htmlFor='email'>Enter Email :</label><br></br>
                            <input type='text' id='email' required min={2}
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='contact'>
                            <label htmlFor='contact'>Contact No. :</label>
                            <input type='number' id='contact' required min={10} placeholder='123-456-7890'
                                value={contact} onChange={(e) => setContact(e.target.value)}/>
                        </div>
                    </div>
                    <div className='field2'>
                        <div className='occassion'>
                            <label htmlFor='occassion'>Select Occasion :</label><br></br>
                            <select id='occassion' required
                                value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option disabled={true}>Occassion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Party</option>
                            </select>
                        </div>
                        <div className='guests'>
                            <label htmlFor='guest'>Guest No. :</label><br></br>
                            <input type='number' id='guest' required min={1} max={10}
                                value={guest} onChange={(e) => setGuest(e.target.value)}/>
                        </div>
                    </div>
                    <div className='field3'>
                        <div className='date'>
                            <label htmlFor='date'>Select Date :</label><br></br>
                            <input type='date' id='date' required min={currentDate}
                                onChange={handleDateChange}/>
                        </div>
                        <div className='time'>
                            <label htmlFor='time'>Select Time :</label>
                            <select id='time' required
                                value={time} onChange={(e) => setTime(e.target.value)}>
                                <option disabled={true}>Check Time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                        <div className='radio'>
                            <label><input type='radio' name='seat'/> Indoor Seating</label>                           
                            <label><input type='radio' name='seat'/> Outdoor Seating</label>                           
                        </div>
                    <div className='field4'>
                        <label htmlFor='request'>Enter Your Request :</label>
                        <input type='textarea' id='request' placeholder='optional'/>
                    </div>
                    <div className='btn'>
                        <button className='confirmBtn' disabled={!FormValidation}>Confirm Reservation</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookTable