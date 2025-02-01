// LanguagePreferences Component
import React, { useState } from 'react';

const LanguagePreferences = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const saveLanguagePreference = () => {
    console.log('Language preference saved:', language);
    // Add API call here
  };

  return (
    <div>
      <h3>Language Preferences</h3>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={language}           style={{
            background: 'rgb(98 97 204)',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
      <button onClick={saveLanguagePreference}           style={{
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

export default LanguagePreferences;