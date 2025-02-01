import React, { useState } from 'react';

const ProfilePictureUpload = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setError('File size should not exceed 2MB.');
        return;
      }

      setError('');
      setProfilePicture(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!profilePicture) {
      setError('Please select a file to upload.');
      return;
    }

    console.log('Uploading file:', profilePicture);
    alert('Profile picture uploaded successfully!');
  };

  return (
    <div className="profile-picture-upload" style={{ textAlign: 'center' }}>
      <h3>Upload Profile Picture</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <label htmlFor="file-input" style={{ cursor: 'pointer', background: 'rgb(98 97 204)', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>
          Choose File
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          onClick={handleUpload}
          style={{
            background: 'rgb(98 97 204)',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Upload
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {preview && (
        <div>
          <h4>Preview:</h4>
          <img
            src={preview}
            alt="Profile Preview"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureUpload;
