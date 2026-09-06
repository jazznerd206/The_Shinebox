import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SchedulingPage from './pages/SchedulingPage'
import ServicesPage from './pages/ServicesPage'
import SignupPage from './pages/SignupPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scheduling" element={<SchedulingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
