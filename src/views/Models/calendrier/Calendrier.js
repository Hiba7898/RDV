// import React, { useState } from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { CCard, CCardBody, CCardHeader } from '@coreui/react'
// // import '@fullcalendar/common/main.css'
// // import '@fullcalendar/daygrid/main.css';
// // import '@fullcalendar/timegrid/main.css';

// const Calendrier = () => {
//   const [events, setEvents] = useState([
//     { title: 'Event 1', date: '2024-11-13', color: 'blue' },
//     { title: 'Event 2', date: '2024-11-13', color: 'green' },
//     { title: 'A 2-day event', start: '2024-11-13', end: '2024-11-15', color: 'purple' },
//   ])

//   const handleDateClick = (info) => {
//     alert(`Date selected: ${info.dateStr}`)
//   }

//   return (
//     <CCard>
//       <CCardHeader>Calendrier</CCardHeader>
//       <CCardBody>
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay',
//           }}
//           events={events}
//           dateClick={handleDateClick}
//           height="auto" // لضبط حجم التقويم تلقائيًا
//           locale="EG" // لضبط التقويم باللغة العربية
//         />
//       </CCardBody>
//     </CCard>
//   )
// }

// export default Calendrier

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';

const Calendrier = ({ events, onDayClick }) => {
  const handleDateClick = (info) => {
    onDayClick(info.dateStr); // تمرير التاريخ للمكوّن الرئيسي
  };

  return (
    <CCard>
      <CCardHeader>Calendrier</CCardHeader>
      <CCardBody>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events} // استخدام الأحداث التي يتم تمريرها من المكوّن الرئيسي
          dateClick={handleDateClick}
          height="auto"
          locale="EG" // لضبط التقويم باللغة العربية
        />
      </CCardBody>
    </CCard>
  );
};

export default Calendrier;

