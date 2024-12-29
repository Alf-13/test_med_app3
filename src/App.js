import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import AppointmentFormWrapper from './Components/AppointmentForm/AppointmentFormWrapper'; // Ensure the path is correct
import BookingConsultation from './Components/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileForm/ProfileForm';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import { NotificationProvider } from './NotificationContext';

function App() {
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
                        <Route path="/appointment-form" element={<AppointmentFormWrapper />} /> {/* Using the wrapper */}
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                        <Route path="/reviews" element={<ReviewForm />} />
                        <Route path="/profile" element={<ProfileForm />} />
                        <Route path="/reports" element={<ReportsLayout />} />
                    </Routes>
                </NotificationProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
