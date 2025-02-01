// Updated Settings Page Design with Additional Sections

import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import ProfileSettings from './ProfileSettings';
import LanguagePreferences from './LanguagePreferences';
import AddressManagement from './AddressManagement';
import AppointmentHistory from './AppointmentHistory';
import CommunicationPreferences from './CommunicationPreferences';

const AppSettings = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <CCard>
      <CCardHeader>Settings Management</CCardHeader>
      <CCardBody>
        {/* Navigation Tabs */}
        <CNav variant="tabs">
          {/* <CNavItem>
            <CNavLink active={activeTab === 0} onClick={() => setActiveTab(0)}>
              Account Settings
            </CNavLink>
          </CNavItem> */}
          <CNavItem>
            <CNavLink active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Profile Settings
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 2} onClick={() => setActiveTab(2)}>
              Notification Settings
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 3} onClick={() => setActiveTab(3)}>
              Privacy Settings
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 4} onClick={() => setActiveTab(4)}>
              Language Preferences
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 5} onClick={() => setActiveTab(5)}>
              Address Management
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 6} onClick={() => setActiveTab(6)}>
              Appointment History
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 7} onClick={() => setActiveTab(7)}>
              Communication Preferences
            </CNavLink>
          </CNavItem>
        </CNav>

        {/* Tab Content */}
        <CTabContent>
          <CTabPane visible={activeTab === 0}>
            <AccountSettings />
          </CTabPane>
          <CTabPane visible={activeTab === 1}>
            <ProfileSettings />
          </CTabPane>
          <CTabPane visible={activeTab === 2}>
            <NotificationSettings />
          </CTabPane>
          <CTabPane visible={activeTab === 3}>
            <PrivacySettings />
          </CTabPane>
          <CTabPane visible={activeTab === 4}>
            <LanguagePreferences />
          </CTabPane>
          <CTabPane visible={activeTab === 5}>
            <AddressManagement />
          </CTabPane>
          <CTabPane visible={activeTab === 6}>
            <AppointmentHistory />
          </CTabPane>
          <CTabPane visible={activeTab === 7}>
            <CommunicationPreferences />
          </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  );
};

export default AppSettings;
