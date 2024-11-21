// import React, { useState } from 'react'
// import AppointmentList from './AppointmentList'
// import AppointmentDetails from './AppointmentDetails'
// import AppointmentForm from './AppointmentForm'
// import Calendrier from './Calendrier'
// import '../Css/Customer.css'

// const AppAppointments = () => {
//   const [currentView, setCurrentView] = useState('calendar')
//   const [selectedAppointment, setSelectedAppointment] = useState(null)
//   const [appointments, setAppointments] = useState([])

//   const handleViewChange = (view, appointment = null) => {
//     setCurrentView(view)
//     setSelectedAppointment(appointment)
//   }

//   const handleSaveAppointment = (newAppointment) => {
//     setAppointments([...appointments, newAppointment])
//     setCurrentView('calendar')
//   }

//   return (
//     <div className="app-container">
//       {currentView === 'calendar' && (
//         <Calendrier
//           appointments={appointments}
//           onDayClick={(day) => handleViewChange('list', day)}
//         />
//       )}

//       {currentView === 'list' && (
//         <AppointmentList
//           appointments={appointments}
//           onViewDetails={(appointment) => handleViewChange('details', appointment)}
//           onCreateNew={() => handleViewChange('form')}
//         />
//       )}

//       {currentView === 'details' && selectedAppointment && (
//         <AppointmentDetails
//           appointment={selectedAppointment}
//           onEdit={() => handleViewChange('form', selectedAppointment)}
//           onBack={() => handleViewChange('list')}
//         />
//       )}

//       {currentView === 'form' && (
//         <AppointmentForm
//           appointment={selectedAppointment}
//           onSave={handleSaveAppointment}
//           onCancel={() => handleViewChange('calendar')}
//         />
//       )}
//     </div>
//   )
// }

// export default AppAppointments

import React, { useState } from 'react'
import AppointmentList from './AppointmentList'
import AppointmentDetails from './AppointmentDetails'
import AppointmentForm from './AppointmentForm'
import Calendrier from './Calendrier'
import '../Css/Customer.css'

const AppAppointments = () => {
  const [currentView, setCurrentView] = useState('calendar')
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [appointments, setAppointments] = useState([])

  const handleViewChange = (view, appointment = null) => {
    setCurrentView(view)
    setSelectedAppointment(appointment)
  }

  const handleSaveAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment])
    setCurrentView('calendar')
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Beauty Salon Management✂️📆</h1>
      {currentView === 'calendar' && (
        <Calendrier
          appointments={appointments}
          onDayClick={(day) => handleViewChange('list', day)}
        />
      )}

      {currentView === 'list' && (
        <AppointmentList
          appointments={appointments}
          onViewDetails={(appointment) => handleViewChange('details', appointment)}
          onCreateNew={() => handleViewChange('form')}
        />
      )}

      {currentView === 'details' && selectedAppointment && (
        <AppointmentDetails
          appointment={selectedAppointment}
          onEdit={() => handleViewChange('form', selectedAppointment)}
          onBack={() => handleViewChange('list')}
        />
      )}

      {currentView === 'form' && (
        <AppointmentForm
          appointment={selectedAppointment}
          onSave={handleSaveAppointment}
          onCancel={() => handleViewChange('calendar')}
        />
      )}
    </div>
  )
}

export default AppAppointments
