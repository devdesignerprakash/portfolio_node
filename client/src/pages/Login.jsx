import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import {toast} from 'react-toastify'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate= useNavigate()
  const {storeTokenInLS} = useAuth();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-node-pskc.onrender.com/auth/login",
        user
      );
      if (response.status ==200) {
        const data = response.data;
        toast.success(data.msg)
        storeTokenInLS(data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.msg || "Something went wrong!";
      toast.error(errorMessage);
    }
  };
  return (
    <>
      <Container
        className=" mt-5 d-flex justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <div
          style={{
            width: "350px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="mb-3 text-center">Login</h2>
          <Form onSubmit={(e) => handleSubmit(e, user)}>
            <Form.Group controlId="formGridEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="JohnDoe@gmail.com"
                name="email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
            <div className="text-center mt-3">
    <p>
      Don't have an account?{' '}
      <Nav.Link to="/register"  as={NavLink} style={{display: 'inline', padding: 0, color:"blue", cursor:'pointer'}} onMouseOver={(e)=>e.target.style.textDecoration="underline"}>
        SignUp
      </Nav.Link>
    </p>
  </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
