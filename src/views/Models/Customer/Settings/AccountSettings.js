import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CFormInput, CButton, CAlert } from '@coreui/react';

const AccountSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'A valid email is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      setSuccessMessage('Account settings saved successfully!');
      // API call to save settings can be added here
    }
  };

  return (
    <CCard>
      <CCardHeader>Account Settings</CCardHeader>
      {/* <CCardBody>
        <CForm>
          <div className="mb-3">
            <label>Name:</label>
            <CFormInput
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <CAlert color="danger">{errors.name}</CAlert>}
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <CFormInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <CAlert color="danger">{errors.email}</CAlert>}
          </div>
          {successMessage && <CAlert color="success">{successMessage}</CAlert>}
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CForm>
      </CCardBody> */}
    </CCard>
  );
};

export default AccountSettings;
