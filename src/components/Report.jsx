import React, { useState } from 'react';
import '../styles.css';


const ReportPage = () => {
  const [formData, setFormData] = useState({
    serialNumber: '',
    date: '',
    location: '',
    name: '',
    cost: '',
    contactNumber: '',
    errorType: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      serialNumber: '',
      date: '',
      location: '',
      name: '',
      cost: '',
      contactNumber: '',
      errorType: '',
      description: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="container reading-page">
      <div className="water-theme">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="report-container">
            <div className="report-row">
              <label htmlFor="serialNumber">Serial Number:</label>
              <input 
                type="text" 
                id="serialNumber" 
                name="serialNumber"
                className="water-select"
                value={formData.serialNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="date">Date:</label>
              <input 
                type="date" 
                id="date" 
                name="date"
                className="water-select"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="location">Location:</label>
              <input 
                type="text" 
                id="location" 
                name="location"
                className="water-select"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="water-select"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="cost">Cost:</label>
              <input 
                type="text" 
                id="cost" 
                name="cost"
                className="water-select"
                value={formData.cost}
                onChange={handleChange}
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input 
                type="tel" 
                id="contactNumber" 
                name="contactNumber"
                className="water-select"
                value={formData.contactNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                required
              />
            </div>

            <div className="report-row">
              <label htmlFor="errorType">Error Type:</label>
              <select 
                id="errorType" 
                name="errorType"
                className="water-select"
                value={formData.errorType}
                onChange={handleChange}
                required
              >
                <option value="">Select Error Type</option>
                <option value="technical">Technical Issue</option>
                <option value="data">Data Discrepancy</option>
                <option value="access">Access Problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="report-row">
              <label htmlFor="description">Description:</label>
              <textarea 
                id="description" 
                name="description"
                className="water-select"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="report-row">
              <button 
                type="submit" 
                className="water-button full-width"
              >
                Submit Report
              </button>
            </div>
          </form>
        ) : (
          <div className="water-card">
            <h3 className="loc-title">Submitted Report Details</h3>
            <div className="water-table table-responsive">
              <table>
                <tbody>
                  <tr>
                    <th>Serial Number:</th>
                    <td>{formData.serialNumber}</td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td>{formData.date}</td>
                  </tr>
                  <tr>
                    <th>Location:</th>
                    <td>{formData.location}</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>{formData.name}</td>
                  </tr>
                  <tr>
                    <th>cost:</th>
                    <td>{formData.cost}</td>
                  </tr>
                  <tr>
                    <th>Contact Number:</th>
                    <td>{formData.contactNumber}</td>
                  </tr>
                  <tr>
                    <th>Error Type:</th>
                    <td>{formData.errorType}</td>
                  </tr>
                  <tr>
                    <th>Description:</th>
                    <td>{formData.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button 
              onClick={resetForm} 
              className="water-button full-width"
              style={{ marginTop: '1rem' }}
            >
              Submit Another Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;