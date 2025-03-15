// src/components/ProviderDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProviderDashboard = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    areaOfSurgery: '',
    typeOfSurgery: '',
    age: '',
    country: '',
    gender: '',
    language: '',
    anonymity: 'public'
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('provider'));
    if (!loggedInUser) {
      navigate('/provider-login');
    } else {
      setUser(loggedInUser);
      // Optionally, fetch existing profile details from backend here
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assume you have an update endpoint at /api/provider/update/:id
      const response = await axios.put(
        `http://localhost:5000/api/provider/update/${user._id}`,
        profile
      );
      console.log('Profile update response:', response.data);
      toast.success('Profile details updated successfully!');
    } catch (err) {
      console.error('Profile update error:', err.response?.data || err.message);
      toast.error('Error updating profile details');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('provider');
    navigate('/provider-login');
  };

  return (
    <div>
      {/* NAVBAR */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 999
        }}
      >
        {user ? (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            Welcome, <strong>{user.username}</strong>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>Not logged in</div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2>Provider Dashboard</h2>
        <h3>Update Your Profile Details</h3>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label>Area of Surgery:</label>
            <input
              type="text"
              name="areaOfSurgery"
              value={profile.areaOfSurgery}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Type of Surgery:</label>
            <input
              type="text"
              name="typeOfSurgery"
              value={profile.typeOfSurgery}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Gender:</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Language Preference:</label>
            <input
              type="text"
              name="language"
              value={profile.language}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Anonymity Option:</label>
            <select
              name="anonymity"
              value={profile.anonymity}
              onChange={handleChange}
              required
            >
              <option value="public">Public Profile</option>
              <option value="anonymous">Anonymous Profile</option>
            </select>
          </div>
          <button type="submit">Submit Details</button>
        </form>
      </div>
    </div>
  );
};

export default ProviderDashboard;
