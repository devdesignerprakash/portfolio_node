import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaEnvelope, FaCog,FaSignOutAlt } from 'react-icons/fa'; // Icons from react-icons
import '../css/sidebar.css'; // Custom CSS for additional styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/dashboard" className="flex-column p-3">
        <Nav.Link as={NavLink} to="/dashboard" className="sidebar-link">
          <FaHome className="sidebar-icon" /> Dashboard
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/projects" className="sidebar-link">
          <FaProjectDiagram className="sidebar-icon" /> Projects
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/messages" className="sidebar-link">
          <FaEnvelope className="sidebar-icon" /> Messages
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/settings" className="sidebar-link">
          <FaCog className="sidebar-icon" /> Settings
        </Nav.Link>
        <Nav.Link as={NavLink} to="/logout" className="sidebar-link">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;