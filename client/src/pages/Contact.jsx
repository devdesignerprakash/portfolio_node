import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth } from '../store/authStore';
import axios from 'axios'
import {toast} from 'react-toastify'

const Contact = () => {
const [contact,setContact]=useState({
  userName:"",
  email:"",
  message:""
})
const {user}= useAuth()
const [userData, setUserData]=useState(true)
useEffect(() => {
  if (user && userData) {
    setContact({
      userName: user.userName,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
}, [user, userData])
const handleInput=(e)=>{
  e.preventDefault()
  const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
    const response= await axios.post("https://portfolio-node-pskc.onrender.com/contact/message",contact)
    if(response.status==200){
      const message= response.data.msg
      toast.success(message)
      setContact({
        userName: user?.userName||"",
        email: user?.email||"",
        message: ""
      })
    }
  }catch(error){
    const errorMessage = error.response?.data?.extraDetails || "Something went wrong!";
    toast.error(errorMessage);
  }
 
}
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <Row className="align-items-center">
        {/* Form Section */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="userName" value={contact.userName} onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" value={contact.email} onChange={handleInput}/>
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" value={contact.message} onChange={handleInput}/>
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
        
        {/* Image Section */}
        <Col md={6} className="text-center">
          <img
            src="support-image.png"
            alt="Contact Support"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
      
      {/* Map Section */}
      <Row className="mt-4">
        <Col>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.985056563659!2d85.32662568803778!3d27.7020753538424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1a6131fb1%3A0xf4a1a2e3422291fb!2sGhattekulo%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1739030589665!5m2!1sen!2snp" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact