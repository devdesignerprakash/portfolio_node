import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Assuming you have an AuthContext for user authentication
import Dashboard from './admin/pages/Dashboard';
import AdminLayout from './admin/pages/AdminLayout';
import { useAuth } from './store/authStore';
import AdminProjects from './admin/pages/AdminProjects';

const App = () => {
  const {user}=useAuth(); // Get the authenticated user from context

  return (
    <BrowserRouter>
    {/* Conditionally render Navbar and Footer if user is not admin */}
    {!user?.isAdmin && <Navbar />}
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      {/* Admin Routes */}
      {user?.isAdmin ? (
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* Default route for /admin */}
          <Route path="dashboard" element={<Dashboard />} /> {/* Relative path */}
          <Route path="projects" element={<AdminProjects />} /> {/* Relative path */}
        </Route>
      ) : (
        <Route path="*" element={<ErrorPage />} />
      )}
      {/* Redirect to admin dashboard if user is admin */}
      {user?.isAdmin && <Route path="*" element={<Navigate to="/admin/dashboard" />} />}
    </Routes>
    {/* Conditionally render Footer if user is not admin */}
    {!user?.isAdmin && <Footer />}
  </BrowserRouter>
  )
};

export default App;