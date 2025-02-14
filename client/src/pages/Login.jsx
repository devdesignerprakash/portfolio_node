import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate= useNavigate()
  const {storeTokenInLS} = useAuth();
  const handleInput = (e) => {
    console.log(e.target.value);
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
        "http://localhost:8000/auth/login",
        user
      );
      if (response.statusText == "OK") {
        const data = response.data;
        storeTokenInLS(data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/")
      }
    } catch (error) {
      console.log("loginError", error);
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
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
