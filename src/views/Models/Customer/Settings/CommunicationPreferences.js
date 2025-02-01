// CommunicationPreferences Component
import React, { useState } from 'react';

const CommunicationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    whatsapp: false,
  });

  const handleToggle = (type) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: !prevPreferences[type],
    }));
  };

  const savePreferences = () => {
    console.log('Communication preferences saved:', preferences);
    // Add API call here
  };

  return (
    <div>
      <h3>Communication Preferences</h3>
      <label>
        <input
          type="checkbox"
          checked={preferences.email}
          onChange={() => handleToggle('email')}
        />
        Email Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={preferences.sms}
          onChange={() => handleToggle('sms')}
        />
        SMS Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={preferences.whatsapp}
          onChange={() => handleToggle('whatsapp')}
        />
        WhatsApp Notifications
      </label>
      <br />
      <button onClick={savePreferences}           style={{
            background: 'rgb(98 97 204)',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>Save</button>
    </div>
  );
};

export default CommunicationPreferences;
