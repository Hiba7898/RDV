import React from 'react';
import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow, CTableDataCell } from '@coreui/react';

const SupportDashboard = () => {
  const tickets = [
    { id: 1, status: 'Open', subject: 'Issue with booking', date: '2023-12-20' },
    { id: 2, status: 'Closed', subject: 'Payment issue', date: '2023-12-18' },
  ];

  return (
    <CCard>
      <CCardHeader>Support Dashboard</CCardHeader>
      <CCardBody>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Subject</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Date</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tickets.map((ticket) => (
              <CTableRow key={ticket.id}>
                <CTableDataCell>{ticket.id}</CTableDataCell>
                <CTableDataCell>{ticket.subject}</CTableDataCell>
                <CTableDataCell>{ticket.status}</CTableDataCell>
                <CTableDataCell>{ticket.date}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default SupportDashboard;
