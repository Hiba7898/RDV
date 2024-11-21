import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../Css/Customer.css'

const AppointmentForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    appointment || {
      service: '',
      subService: '',
      date: '',
      customerName: '',
      stylist: '',
      time: '',
    },
  )

  const availableStylists = ['John', 'Emma', 'Sophia']

  const serviceCategories = {
    'Haircuts & Styling': [
      "Men's Haircut",
      "Women's Haircut",
      "Children's Haircut",
      'Blow-Dry',
      'Wash, Cut, and Blow-Dry',
      'Fringe/Bangs Trimming',
      'Hair Styling for Special Occasions',
      'Braiding and Twisting',
      'Updos and Bun Styling',
      'Quick Hairstyling (15-minute style)',
    ],
    'Hair Coloring': [
      'Full Hair Color',
      'Root Touch-Up',
      'Highlights',
      'Full Highlights',
      'Partial Highlights',
      'Balayage/Ombre',
      'Toner Application',
      'Glossing Treatments',
      'Hair Color Correction',
    ],
    Treatments: [
      'Deep Conditioning Treatment',
      'Keratin Treatment (Smoothing/Anti-Frizz)',
      'Scalp Treatments (e.g., detox, dandruff control)',
      'Protein Treatment',
      'Hair Botox',
      'Hot Oil Treatment',
      'Olaplex Treatment (or other bond-building treatments)',
    ],
    'Hair Extensions': [
      'Clip-In Extensions Application',
      'Tape-In Extensions',
      'Sew-In Extensions',
      'Fusion/Pre-Bonded Extensions',
      'Micro-Link Extensions',
      'Extension Maintenance and Removal',
    ],
    'Texture Services': [
      'Perms (to add curls or waves)',
      'Straightening Services',
      'Japanese Straightening',
      'Brazilian Blowout',
      'Relaxers (chemical hair straightening)',
      'Texturizing Treatments (for softer waves)',
    ],
    'Bridal and Special Packages': [
      'Bridal Hair Trial',
      'Bridal Hair Styling',
      'Bridal Party Hair Styling',
      'Wedding Packages (Hair and Makeup)',
      'Prom Packages',
    ],
    'Barber Services': [
      'Beard Trim',
      'Beard Shaping',
      'Hot Towel Shave',
      'Line-Up/Edge-Up',
      'Facial Hair Coloring',
    ],
    "Kids' Services": ["Boys' Haircut", "Girls' Haircut", 'Special Occasion Styling for Kids'],
    'Additional Services': [
      'Hair Consultation (customized advice for style or treatment)',
      'Bang Trim (Free touch-up between appointments)',
      'Head Massage (add-on to wash)',
    ],
    'Seasonal/Trendy Services': [
      'Fashion Colors (e.g., pastel, neon, or rainbow hair)',
      'Hair Feathers',
      'Temporary Hair Tinsel',
      'Curl Enhancements',
    ],
    'Home and Mobile Services (Optional)': ['Mobile Haircuts', 'Event/On-Site Hair Styling'],
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'service') {
      setFormData({ ...formData, service: value, subService: '' }) // Reset subService when service changes
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ ...formData, id: Date.now() })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <h2>{appointment ? 'Edit Appointment' : 'Create Appointment'}</h2>

        {/* Main Service Dropdown */}
        <label>
          Service:
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Choose a service</option>
            {Object.keys(serviceCategories).map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Sub-Service Dropdown */}
        {formData.service && (
          <label>
            Sub-Service:
            <select name="subService" value={formData.subService} onChange={handleChange} required>
              <option value="">Choose a sub-service</option>
              {serviceCategories[formData.service].map((subService, index) => (
                <option key={index} value={subService}>
                  {subService}
                </option>
              ))}
            </select>
          </label>
        )}
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
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
          <select name="stylist" value={formData.stylist} onChange={handleChange} required>
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
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
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
  )
}
// PropTypes validation
AppointmentForm.propTypes = {
  appointment: PropTypes.shape({
    service: PropTypes.string,
    subService: PropTypes.string,
    date: PropTypes.string,
    customerName: PropTypes.string,
    stylist: PropTypes.string,
    time: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired, // onSave is a required function
  onCancel: PropTypes.func.isRequired, // onCancel is a required function
}

// Default props (optional)
AppointmentForm.defaultProps = {
  appointment: null, // Default appointment is null
}

export default AppointmentForm
