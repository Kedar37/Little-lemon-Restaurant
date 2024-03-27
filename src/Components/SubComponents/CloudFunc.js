const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendBookingEmail = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate(async (snap, context) => {
    const newBooking = snap.data();

    // Prepare the email content using the form data
    const mailOptions = {
      to: 'kedargavali950@gmail.com',
      subject: 'New Booking Received',
      text: `
        Full Name: ${newBooking.fullname}
        Email: ${newBooking.email}
        Contact: ${newBooking.contact}
        Date: ${newBooking.date}
        Time: ${newBooking.time}
        Guest: ${newBooking.guest}
        Occasion: ${newBooking.occasion}
      `,
    };

    try {
      await admin.firestore().collection('sent-emails').add(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });