import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./css/home.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";

const Home = () => {
  const navigate=useNavigate()
  const {user}=useAuth()
  const handleClick=()=>{
    navigate("/about")
  }
  return (
    <Container fluid className="hero-section">
      <Row className="justify-content-center align-items-center text-center vh-100">
        <Col md={6} className="information">
          <h2 className="mb-3"> Hi {user&&user ? user.userName : "Guest"}, welcome to Prakash Tech</h2>
          <p>
            <b> I am a Fullstack Developer from Kathmandu, Nepal, creating efficient web applications
            and seamless user experiences. Always eager to explore new technologies and improve skills.</b>I
          </p>
          <Button variant="outline-secondary"  size="lg" className="floating-button text-dark"  onClick={handleClick}>
            About Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
