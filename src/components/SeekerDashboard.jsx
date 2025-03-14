// src/components/SeekerDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeekerDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/seeker-login');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/seeker-login');
  };

  return (
    <div>
      {/* NAVBAR */}
      <header
        style={{
          position: 'fixed',       // Make the navbar fixed at the top
          top: 0,
          left: 0,
          width: '100%',          // Span the entire width
          height: '60px',         // Navbar height
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 999             // Ensure it stays on top of other elements
        }}
      >
        {user ? (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span>Welcome, <strong>{user.username}</strong></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>Not logged in</div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <div
        style={{
          marginTop: '80px',    // Push content below the fixed navbar
          textAlign: 'center'
        }}
      >
        <h2>Hi, Welcome to Your Dashboard!</h2>
      </div>
    </div>
  );
};

export default SeekerDashboard;
