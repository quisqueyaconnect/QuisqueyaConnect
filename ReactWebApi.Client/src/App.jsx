import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import ServicesAvailable from './Components/ServicesAvailable'
import Home from './Components/Home'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'
import HowWeWork from './Components/HowWeWork'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesAvailable />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/howWeWork" element={<HowWeWork />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
