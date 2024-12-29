import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology' },
        // Add more doctor data as needed
    ];

    const handleViewReport = (doctorId) => {
        console.log(`View report for doctor with ID: ${doctorId}`);
        // Implement view report logic here
    };

    const handleDownloadReport = (doctorId) => {
        console.log(`Download report for doctor with ID: ${doctorId}`);
        // Implement download report logic here
    };

    return (
        <div className="reports-page">
            <h1>Doctor Reports</h1>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>
                                <button onClick={() => handleViewReport(doctor.id)}>View Report</button>
                            </td>
                            <td>
                                <button onClick={() => handleDownloadReport(doctor.id)}>Download Report</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;
