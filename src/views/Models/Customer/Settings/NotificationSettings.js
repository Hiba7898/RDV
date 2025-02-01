import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CFormCheck } from '@coreui/react';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <CCard>
      <CCardHeader>Notification Settings</CCardHeader>
      <CCardBody>
        <div className="mb-3">
          <CFormCheck
            label="Enable Email Notifications"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>
        <div className="mb-3">
          <CFormCheck
            label="Enable SMS Notifications"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
        </div>
      </CCardBody>
    </CCard>
  );
};

export default NotificationSettings;
