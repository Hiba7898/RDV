


import React from 'react';
import '../Css/Customer.css';


const AppointmentList = ({ appointments, onViewDetails, onCreateNew }) => {
  return (
    <div className="appointment-list-container">
      <h2 className="appointment-list-title">Appointments</h2>
      <button className="create-appointment-btn" onClick={onCreateNew}>
        + Create New Appointment
      </button>
      <ul className="appointment-list">
        {appointments.length === 0 ? (
          <p className="no-appointments-text">No appointments available.</p>
        ) : (
          appointments.map((appt) => (
            <li key={appt.id} className="appointment-item">
              <div className="appointment-info">
                <span className="appointment-service">{appt.service}</span>
                <span className="appointment-date">on {appt.date}</span>
              </div>
              <button
                className="view-details-btn"
                onClick={() => onViewDetails(appt)}
              >
                View Details
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AppointmentList;

