import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormText,
} from '@coreui/react';

const EditProfileForm = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || '');

  const handleSave = () => {
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }
    const updatedUser = { name, email, phone };
    onSave(updatedUser); // Pass updated data to parent
  };

  return (
    <CCard>
      <CCardHeader>Edit Profile</CCardHeader>
      <CCardBody>
        <CForm>
          <div className="mb-3">
            <label>Name:</label>
            <CFormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <CFormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CFormText>Your email must be a valid email address.</CFormText>
          </div>
          <div className="mb-3">
            <label>Phone:</label>
            <CFormInput
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default EditProfileForm;
