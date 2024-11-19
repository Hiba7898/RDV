import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormText,
  CCol,
  CRow
} from '@coreui/react';
import logo from '../../../assets/brand/hiyainc_logo.jpg'
//./assets/brand/
const Profile = () => {
  const [email, setEmail] = useState('user@example.com')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSaveChanges = () => {
    alert(' Information updated successfully  ')
  }


  return (
    <CCard>
      <CCardHeader> Profile </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="3">
            <img src={logo} alt="User" className="img-thumbnail" />
          </CCol>
          <CCol md="9">
            <CForm>
              <div className="mb-3">
                <label> User Name :</label>
                <CFormInput type="text" placeholder=" Name" value="HIYA" disabled />
              </div>
              <div className="mb-3">
                <label> Email :</label>
                <CFormInput type="email" placeholder="email " value={email} onChange={handleEmailChange} />
                <CFormText>You can change your email here.</CFormText>
              </div>
              <div className="mb-3">
                <label> Password :</label>
                <CFormInput type="password" placeholder="New Password" value={password} onChange={handlePasswordChange} />
                <CFormText> Enter a new password if you want to change it. </CFormText>
              </div>
              <CButton color="primary" onClick={handleSaveChanges}>
                Save Changes
              </CButton>
            </CForm>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default Profile;
