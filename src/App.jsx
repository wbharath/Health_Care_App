import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SeekerRegistration from './components/SeekerRegistration'
import SeekerLogin from './components/SeekerLogin'
import SeekerDashboard from './components/SeekerDashboard'
import ProviderDashboard from './components/ProviderDashboard'
import ProviderRegistration from './components/ProviderRegistration'
import ProviderLogin from './components/ProviderLogin'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {
  
  return (
    <Router>
      <div>
        <ToastContainer position="top-center"/>
      <Routes>
        {/* Seeker Routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path="/seeker-registration" element={<SeekerRegistration />} />
        <Route path="/seeker-login" element={<SeekerLogin />} />
        <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
        {/* Provider Routes */}
        <Route path="/provider-registration" element={<ProviderRegistration />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
