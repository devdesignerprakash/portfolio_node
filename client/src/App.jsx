
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
import Logout from './pages/Logout'


function App() {
 
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/services" element={<Services/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route  path="/logout" element={<Logout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
