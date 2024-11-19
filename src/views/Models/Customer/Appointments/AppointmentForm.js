import React, { useState } from 'react';
import '../Css/Customer.css';

const AppointmentForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    appointment || { service: '', date: '', customerName: '', stylist: '', time: '' }
  );

  const availableStylists = ['John', 'Emma', 'Sophia'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: Date.now() });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <h2>{appointment ? 'Edit Appointment' : 'Create Appointment'}</h2>

        <label>
          Service:
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Customer Name:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Stylist:
          <select
            name="stylist"
            value={formData.stylist}
            onChange={handleChange}
            required
          >
            <option value="">Choose a stylist</option>
            {availableStylists.map((stylist, index) => (
              <option key={index} value={stylist}>
                {stylist}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>


      <div className="form-image">
        <img
          src="https://via.placeholder.com/300x300.png?text=Hairdressing+Image"
          alt="Hairdressing"
        />
      </div>
    </div>
  );
};

export default AppointmentForm;
