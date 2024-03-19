import { render, screen } from '@testing-library/react';
import BookingForm from './Components/SubComponents/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reserve Table');
  expect(headingElement).toBeInTheDocument();
});

// const updateAvailableTimes = require('./updateAvailableTimes'); // Import the function you want to test

//   test('returns correct available times for Saturday', () => {
//     render(<BookingForm/>);
//     const date = new Date('03-23-2024');
//     const expectedTimes = ['12:00', '14:00', '16:00', '18:00'];
//     const availableTimes = updateAvailableTimes(date);
//     expect(availableTimes).toEqual(expectedTimes);
//   });