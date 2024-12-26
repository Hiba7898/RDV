import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormText,
  CAlert,
} from '@coreui/react';

const ChangePassword = ({ onChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessageType('danger');
      setMessage('All fields are required!');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessageType('danger');
      setMessage('New password and confirmation do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setMessageType('danger');
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    onChangePassword({ currentPassword, newPassword });
    setMessageType('success');
    setMessage('Password updated successfully!');
  };

  return (
    <CCard>
      <CCardHeader>Change Password</CCardHeader>
      <CCardBody>
        {message && <CAlert color={messageType}>{message}</CAlert>}
        <CForm>
          <div className="mb-3">
            <label>Current Password:</label>
            <CFormInput
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>New Password:</label>
            <CFormInput
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <CFormText>Password must be at least 6 characters long.</CFormText>
          </div>
          <div className="mb-3">
            <label>Confirm New Password:</label>
            <CFormInput
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <CButton color="primary" onClick={handleSave}>
            Update Password
          </CButton>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default ChangePassword;
