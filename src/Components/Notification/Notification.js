import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ message, name, phoneNumber, dateOfAppointment, selectedSlot }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {message && (
        <div className="notification">
          <h3>Appointment Details:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Date of Appointment:</strong> {dateOfAppointment}</p>
          <p><strong>Time Slot:</strong> {selectedSlot}</p>
          <p>{message}</p>
        </div>
      )}
      {isLoggedIn && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
