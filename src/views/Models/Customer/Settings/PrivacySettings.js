import React from 'react';
import { CCard, CCardBody, CCardHeader, CFormCheck } from '@coreui/react';

const PrivacySettings = () => {
  return (
    <CCard>
      <CCardHeader>Privacy Settings</CCardHeader>
      <CCardBody>
        <div className="mb-3">
          <CFormCheck label="Allow profile visibility to others" />
        </div>
        <div className="mb-3">
          <CFormCheck label="Enable analytics tracking" />
        </div>
      </CCardBody>
    </CCard>
  );
};

export default PrivacySettings;
