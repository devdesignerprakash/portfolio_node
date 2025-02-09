import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const [user,setUser]=useState({
    userName:"",
    email:"",
    password:"",
    phone:""
  })
  const navigate= useNavigate()
  const handleInput=(e)=>{
    console.log(e.target.value)
    const {name,value}=e.target
     setUser({
      ...user,
      [name]:value
     })
  }

  const handleSubmit=async(e)=>{
   e.preventDefault()
   try{
    const response= await axios.post("http://localhost:8000/auth/register",user)
    console.log(response)
    if (response.statusText=="OK"){
      setUser({
        userName:"",
        password:"",
        email:"",
        phone:""
      })
      navigate("/login")
    }
   }
   catch(error){
    console.log("register",error)
   }
 
  }
  return (
    <>
    <div className="container mt-3">
      <h2 className="mb-3">Register</h2>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" name='userName' value={user.userName} onChange={handleInput}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" name='email' value={user.email} onChange={handleInput}/>
        </Form.Group>
      </Row>
    <Row className='mb-3'>
      <Form.Group  as={Col} className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type= "password" placeholder="Enter your Password" name='password' value={user.password} onChange={handleInput}/>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="Enter your Phone Number" name='phone' value={user.phone} onChange={handleInput}/>
      </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        SigUp
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register