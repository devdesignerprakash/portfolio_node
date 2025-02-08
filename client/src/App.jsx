
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Register from './pages/Register'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'


function App() {
 
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
