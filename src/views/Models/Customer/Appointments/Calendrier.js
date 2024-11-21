// // export default Calendrier;
// import React from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import { CCard, CCardBody, CCardHeader } from '@coreui/react'
// import '../Css/Customer.css'

// const Calendrier = ({ appointments , onDayClick }) => {
//   const events = appointments.map((appt) => ({
//     title: appt.service,
//     date: appt.date,
//   }))

//   return (
//     <CCard>
//       <CCardHeader>Calendrier</CCardHeader>
//       <CCardBody>
//         <div className="calendar-container">
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             initialView="dayGridMonth"
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay',
//             }}
//             events={events}
//             dateClick={(info) => onDayClick(info.dateStr)}
//             height="auto"
//             locale="EG"
//           />
//         </div>
//       </CCardBody>
//     </CCard>
//   )
// }

// export default Calendrier

// export default Calendrier;
import React from 'react'
import PropTypes from 'prop-types'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import '../Css/Customer.css'

const Calendrier = ({ appointments, onDayClick }) => {
  const events = appointments.map((appt) => ({
    title: appt.service,
    date: appt.date,
  }))

  return (
    <CCard>
      <CCardHeader>Calendrier</CCardHeader>
      <CCardBody>
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            events={events}
            dateClick={(info) => onDayClick(info.dateStr)}
            height="auto"
            locale="EG"
          />
        </div>
      </CCardBody>
    </CCard>
  )
}

// PropTypes validation
Calendrier.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      service: PropTypes.string.isRequired, // Define the shape of each appointment object
      date: PropTypes.string.isRequired, // Ensure date is a string (ISO date format)
    }),
  ).isRequired,
  onDayClick: PropTypes.func.isRequired, // onDayClick should be a function
}

// Default props (optional)
Calendrier.defaultProps = {
  appointments: [], // Default to an empty array
  onDayClick: () => {}, // Default to a no-op function
}

export default Calendrier
