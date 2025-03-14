// src/SeekerLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeekerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the login data for now.
    console.log('Seeker Login Data:', formData);
    // Later, verify the credentials against your database.
    navigate('/seeker-dashboard');
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '400px' }}>
      <h2>Seeker Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username or Email:</label>
          <input
            type="text"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/seeker-registration">Register here</a>
      </p>
    </div>
  );
};

export default SeekerLogin;
