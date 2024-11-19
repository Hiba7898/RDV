import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendrier = ({ appointments, onDayClick }) => {
  const events = appointments.map((appt) => ({
    title: appt.service,
    date: appt.date,
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={(info) => onDayClick(info.dateStr)}
    />
  );
};

export default Calendrier;
