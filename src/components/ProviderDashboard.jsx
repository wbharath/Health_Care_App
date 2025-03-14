// src/components/ProviderDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProviderDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('provider'));
    if (!loggedInUser) {
      navigate('/provider-login');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

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
            Welcome, <strong>{user.username}</strong>{' '}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>Not logged in</div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2>Hi, Welcome to Your Provider Dashboard!</h2>
      </div>
    </div>
  );
};

export default ProviderDashboard;
