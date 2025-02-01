import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
} from '@coreui/react';
import logo from '../../../../assets/brand/hiyainc_logo.jpg'


const UserProfile = ({ user }) => {
  return (
    <CCard>
      <CCardHeader>User Profile</CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md="4" className="text-center">
            <img
              src={user.avatar || logo}
              alt="User Avatar"
              className="img-thumbnail rounded-circle"
              style={{ width: '150px', height: '150px' }}
            />
          </CCol>
          <CCol md="8">
            <CListGroup>
              <CListGroupItem>
                <strong>Name:</strong> {user.name}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Email:</strong> {user.email}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Phone:</strong> {user.phone || 'Not Provided'}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Joined Date:</strong> {user.joinedDate}
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default UserProfile;

