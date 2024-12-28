import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import BookingConsultation from './Components/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import { NotificationProvider } from './NotificationContext';

function App() {
    const handleFormSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        // Handle form submission (e.g., send data to an API, update state, etc.)
    };

    return (
        <div className="App">
            <BrowserRouter>
                <NotificationProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/appointment-form" element={<AppointmentForm onSubmit={handleFormSubmit} />} />
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                        <Route path="/reviews" element={<ReviewForm />} />
                    </Routes>
                </NotificationProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
