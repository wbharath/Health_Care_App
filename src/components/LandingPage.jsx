import { useNavigate } from "react-router-dom"


const LandingPage = () => {
    const navigate = useNavigate()

    const handleSeeker = ()=>{
        navigate('/seeker-registration')
    }

    const handleProvider = ()=>{
        navigate('/provider-auth')
    }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Welcome to the Support Platform</h1>
    <div style={{ margin: '20px' }}>
      <button onClick={handleSeeker} style={{ marginRight: '10px', padding: '10px 20px' }}>
        I need support
      </button>
      <button onClick={handleProvider} style={{ padding: '10px 20px' }}>
        I wanna support
      </button>
    </div>
  </div>
  )
}

export default LandingPage
