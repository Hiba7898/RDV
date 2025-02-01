import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import FAQList from './FAQList';
import SupportDashboard from './SupportDashboard';
import SupportTicketForm from './SupportTicketForm';

const AppSupport = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <CCard>
      <CCardHeader>Support Management</CCardHeader>
      <CCardBody>
        {/* Navigation Tabs */}
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink active={activeTab === 0} onClick={() => setActiveTab(0)}>
              FAQs
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Support Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeTab === 2} onClick={() => setActiveTab(2)}>
              Create Support Ticket
            </CNavLink>
          </CNavItem>
        </CNav>

        {/* Tab Content */}
        <CTabContent>
          <CTabPane visible={activeTab === 0}>
            <FAQList />
          </CTabPane>
          <CTabPane visible={activeTab === 1}>
            <SupportDashboard />
          </CTabPane>
          <CTabPane visible={activeTab === 2}>
            <SupportTicketForm />
          </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  );
};

export default AppSupport;
