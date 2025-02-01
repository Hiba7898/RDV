// AddressManagement Component
import React, { useState } from 'react';

const AddressManagement = () => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const saveAddress = () => {
    console.log('Address saved:', address);
    // Add API call here
  };

  return (
    <div>
      <h3>Address Management</h3>
      <label htmlFor="address">Enter Address:</label>
      <textarea
        id="address"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter your address"
        rows="3"
      ></textarea>
      <button onClick={saveAddress}>Save</button>
    </div>
  );
};

export default AddressManagement;