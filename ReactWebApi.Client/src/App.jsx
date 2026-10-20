import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import ServicesAvailable from './Components/ServicesAvailable'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesAvailable />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
