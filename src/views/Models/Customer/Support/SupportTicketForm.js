import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CFormInput, CFormTextarea, CButton } from '@coreui/react';

const SupportTicketForm = () => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    alert(`Ticket submitted!\nSubject: ${subject}\nDescription: ${description}`);
    setSubject('');
    setDescription('');
  };

  return (
    <CCard>
      <CCardHeader>Create Support Ticket</CCardHeader>
      <CCardBody>
        <CForm>
          <div className="mb-3">
            <label>Subject:</label>
            <CFormInput
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the issue subject"
            />
          </div>
          <div className="mb-3">
            <label>Description:</label>
            <CFormTextarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your issue"
            />
          </div>
          <CButton color="primary" onClick={handleSubmit}>
            Submit Ticket
          </CButton>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default SupportTicketForm;
