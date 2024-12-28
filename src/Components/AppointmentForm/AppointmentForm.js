import React, { useState } from 'react';
import '../DoctorCard/DoctorCard.css'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, dateOfAppointment, selectedSlot });
        setName('');
        setPhoneNumber('');
        setDateOfAppointment('');
        setSelectedSlot('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="dateOfAppointment">Date of Appointment:</label>
                <input
                    type="date"
                    id="dateOfAppointment"
                    value={dateOfAppointment}
                    onChange={(e) => setDateOfAppointment(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="selectedSlot">Book Time Slot:</label>
                <select
                    id="selectedSlot"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a time slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                    <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;
