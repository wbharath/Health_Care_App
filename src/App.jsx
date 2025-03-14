import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SeekerRegistration from './components/SeekerRegistration'
import SeekerLogin from './components/SeekerLogin'


function App() {
  
  return (
    <Router>
      <Routes>
        {/* Seeker Routes */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/seeker-registration" element={<SeekerRegistration />} />
        <Route path="/seeker-login" element={<SeekerLogin />} />
        {/* <Route path="/seeker-dashboard" element={<SeekerDashboard />} /> */}
        {/* Provider Routes */}
        {/* <Route path="/provider-registration" element={<ProviderRegistration />} /> */}
        {/* <Route path="/provider-login" element={<ProviderLogin />} /> */}
        {/* <Route path="/provider-dashboard" element={<ProviderDashboard />} /> */}
      </Routes>
    </Router>
  )
}

export default App
