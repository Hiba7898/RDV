import React from 'react';
import '../Css/Customer.css';
const AppointmentDetails = ({ appointment, onEdit, onBack }) => {
  return (
    <div className="details-container">
      <h2 className="details-title">Appointment Details</h2>
      <div className="details-content">
        <p><strong>Service:</strong> {appointment.service}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Customer Name:</strong> {appointment.customerName}</p>
      </div>
      <div className="details-buttons">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="back-btn" onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
