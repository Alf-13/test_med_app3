import React from 'react';
import AppointmentForm from './AppointmentForm';
import { NotificationProvider } from '../../NotificationContext'; // Ensure NotificationProvider is imported

const AppointmentFormWrapper = () => {
    const handleFormSubmit = (appointmentDetails) => {
        // Handle form submission logic here
        console.log('Appointment details:', appointmentDetails);
    };

    return (
        <NotificationProvider>
            <div>
                <h1>Book an Appointment</h1>
                <AppointmentForm onSubmit={handleFormSubmit} />
            </div>
        </NotificationProvider>
    );
};

export default AppointmentFormWrapper;
