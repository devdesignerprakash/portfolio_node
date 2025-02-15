import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../css/sidebar.css"; // Import custom styles
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin/dashboard" className="sidebar-link">
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/users" className="sidebar-link">
          Manage Users
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/projects" className="sidebar-link">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" className="sidebar-link">
          LogOut
        </Nav.Link>
      </Nav>
    </div>
  );
};
export default Sidebar;
