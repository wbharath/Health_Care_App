import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/seeker-auth" element={<div>Seeker Auth Page (Coming Soon)</div>} />
        <Route path="/provider-auth" element={<div>Provider Auth Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  )
}

export default App
