import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const Register = () => {
  const [user,setUser]=useState({
    userName:"",
    email:"",
    password:"",
    phone:""
  })
  const navigate= useNavigate()
  const handleInput=(e)=>{
    const {name,value}=e.target
     setUser({
      ...user,
      [name]:value
     })
  }

  const handleSubmit=async(e)=>{
   e.preventDefault()
   try{
    const response= await axios.post("https://portfolio-node-pskc.onrender.com/auth/register",user)
    if (response.status==200){
      const message= response.data.msg
      toast.success(message)
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
    const errorMessage = error.response?.data?.extraDetails || error.response?.data?.msg ||"Something went wrong";
    toast.error(errorMessage)
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
        SignUp
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Register