// AppointmentHistory Component
import React from 'react';

const AppointmentHistory = () => {
  const appointments = [
    { date: '2024-01-10', service: 'Haircut', stylist: 'John Doe' },
    { date: '2024-01-15', service: 'Manicure', stylist: 'Jane Smith' },
  ];

  return (
    <div>
      <h3>Appointment History</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Date:</strong> {appointment.date}, <strong>Service:</strong> {appointment.service}, <strong>Stylist:</strong> {appointment.stylist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;