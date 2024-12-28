import React, { useContext } from 'react';
import { NotificationContext } from '../../NotificationContext';
import './Notification.css';

const Notification = () => {
    const { notification } = useContext(NotificationContext);

    if (!notification) return null;

    return (
        <div className="notification">
            <h3>Appointment Details:</h3>
            <p><strong>Name:</strong> {notification.details.name}</p>
            <p><strong>Phone Number:</strong> {notification.details.phoneNumber}</p>
            <p><strong>Date of Appointment:</strong> {notification.details.dateOfAppointment}</p>
            <p><strong>Time Slot:</strong> {notification.details.selectedSlot}</p>
            <p>{notification.message}</p>
        </div>
    );
};

export default Notification;
