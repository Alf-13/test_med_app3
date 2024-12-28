import React, { useState } from 'react';
import './ReviewForm.css';
import Feedback from '../Feedback/Feedback';

const ReviewForm = () => {
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [doctors, setDoctors] = useState([
        { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology', reviewGiven: '' },
        { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', reviewGiven: '' },
        // Add more doctor data as needed
    ]);

    const handleFeedback = (doctorId) => {
        setSelectedDoctorId(doctorId);
    };

    const handleFormSubmit = (doctorId, feedback) => {
        const updatedDoctors = doctors.map(doctor => {
            if (doctor.id === doctorId) {
                return { ...doctor, reviewGiven: `${feedback.rating} stars`, reviewSubmitted: true };
            }
            return doctor;
        });
        setDoctors(updatedDoctors);
        setSelectedDoctorId(null); // Close the feedback form after submission
        console.log(`Feedback submitted for doctor with ID: ${doctorId}`, feedback);
    };

    return (
        <div className="review-page">
            <h1>Doctor Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>
                                <button
                                    className={doctor.reviewSubmitted ? 'disabled' : ''}
                                    onClick={() => handleFeedback(doctor.id)}
                                    disabled={doctor.reviewSubmitted}
                                >
                                    {doctor.reviewSubmitted ? 'Review Submitted' : 'Click Here'}
                                </button>
                            </td>
                            <td>{doctor.reviewGiven}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedDoctorId && <Feedback doctorId={selectedDoctorId} onSubmit={handleFormSubmit} />}
        </div>
    );
};

export default ReviewForm;
