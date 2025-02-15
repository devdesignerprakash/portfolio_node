
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Register from './pages/Register'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import Logout from './pages/Logout'
import Projects from './pages/Projects'
import Dashboard from './admin/pages/Dashboard'
import Sidebar from './admin/components/SideBar'
import { useAuth } from './store/authStore'
import AdminLayout from './admin/pages/AdminLayout'
function App() {
  const {user}= useAuth()
  console.log(user)
  return (
    <BrowserRouter>
      {user?.isAdmin?<Sidebar/>:<NavBar/>}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Admin Routes (Only for Admins) */}
        {user?.isAdmin && (
          <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
            {/* <Route path="users" element={<ManageUsers />} />
            <Route path="projects" element={<ManageProjects />} /> */}
          </Route>
        )}
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
