import React, { useState, useEffect } from 'react';
import { useNavigate } from 'React-router-dom';
import './Account.css';

const Account = () => {
  const [adminDetails, setAdminDetails] = useState({
    adminName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      const response = await fetch('http://localhost:3001/admin');
      const data = await response.json();
      setAdminDetails(data);
    };

    fetchAdminDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminDetails),
      });

      if (response.ok) {
        alert('Details updated successfully');
        setIsEditing(false);
      } else {
        alert('Error updating details');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="account-container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8 col-lg-6">
          <div className="account-admin-form">
            <h3 className="text-center mb-4">Admin Account Information</h3>
            {isEditing ? (
              <form onSubmit={handleSaveChanges}>
                {Object.keys(adminDetails).map((field) => (
                  <div className="form-group" key={field}>
                    <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={field === 'password' ? 'password' : 'text'}
                      className="form-control"
                      id={field}
                      name={field}
                      value={adminDetails[field]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}
                
                <div className='d-grid gap-2'>
                  <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                  <button type="button" className="btn btn-secondary btn-block" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </form>
            ) : (
              <div>
                {Object.keys(adminDetails).map((field) => (
                  <p key={field}>
                    <strong>{field.replace(/([A-Z])/g, ' $1')}:</strong> {adminDetails[field]}
                  </p>
                ))}
                <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
