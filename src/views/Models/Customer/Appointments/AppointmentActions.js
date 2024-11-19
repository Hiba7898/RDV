import React from 'react';

const AppointmentActions = ({ appointment, onCancel, onReschedule }) => {
  return (
    <div>
      <button onClick={() => onCancel(appointment.id)}>Cancel Appointment</button>
      <button onClick={() => onReschedule(appointment.id)}>Reschedule</button>
    </div>
  );
};

export default AppointmentActions;
