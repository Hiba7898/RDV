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
import UserProfile from './UserProfile';
import EditProfileForm from './EditProfileForm';
import ChangePassword from './ChangePassword';

const AppProfile = () => {
  // État pour gérer les données utilisateur
  const [user, setUser] = useState({
    name: 'HIYA User',
    email: 'user@example.com',
    phone: '123-456-7890',
    joinedDate: '2023-01-01',
    avatar: null,
  });

  // État pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState(0);

  // Fonction pour mettre à jour les informations utilisateur
  const handleSaveProfile = (updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
    alert('Profile updated successfully!');
  };

  // Fonction pour changer le mot de passe (dummy)
  const handleChangePassword = (passwordData) => {
    console.log('Password updated:', passwordData);
    alert('Password updated successfully!');
  };

  return (
    <CCard>
      <CCardHeader>Profile Management</CCardHeader>
      <CCardBody>
        {/* Navigation entre les onglets */}
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink
              active={activeTab === 0}
              onClick={() => setActiveTab(0)}
            >
              User Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Edit Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            >
              Change Password
            </CNavLink>
          </CNavItem>
        </CNav>

        {/* Contenu des onglets */}
        <CTabContent>
          <CTabPane visible={activeTab === 0}>
            <UserProfile user={user} />
          </CTabPane>
          <CTabPane visible={activeTab === 1}>
            <EditProfileForm user={user} onSave={handleSaveProfile} />
          </CTabPane>
          <CTabPane visible={activeTab === 2}>
            <ChangePassword onChangePassword={handleChangePassword} />
          </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  );
};

export default AppProfile;
