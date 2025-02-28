import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faPhone,
  faMapMarkerAlt,
  faGraduationCap,
  faEnvelope,
  faGlobe,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const skillLevels = {
    htmlCss: 90,
    javascript: 85,
    react: 80,
    node: 75,
    mongoSQL: 70,
    express: 80,
    python:80,
    django:80
  };

   

  return (
    <Container className="mt-3">
      {/* About Me Section */}
      <Row className="text-center">
        <Col>
          <h2 className="mb-3">About Me</h2>
          <p className="lead" style={{ textAlign: "justify" }}>
            <b>
              I am a Fullstack Developer from Kathmandu, Nepal, creating
              efficient web applications and seamless user experiences. Always
              eager to explore new technologies and improve skills.
            </b>
          </p>
        </Col>
      </Row>

      {/* Profile Image & Bio Data Section */}
      <Row className="align-items-center mt-4">
        {/* Left Column: Profile Image */}
        <Col md={4} className="text-center">
          <Image
            src="profile.jpg"
            fluid
            alt="My Photo"
          className="img-fluid rounded shadow"
          />
        </Col>

        {/* Right Column: Bio Data */}
        <Col md={8}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Full Stack Developer</h2>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
                  <b>Birthday:</b> 10 March 1994
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  <b>Website:</b> https://prakashportfolio-eight.vercel.app
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <b>Phone:</b> +977 9866332260
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <b>City:</b> Kathmandu, Nepal
                </li>
                <li>
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  <b>Degree:</b> BTEC 
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <b>Email:</b> devdesignerprakash@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  <b>Freelance:</b> Available
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Skills Section (Two Columns) */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">
            <FontAwesomeIcon icon={faCode} className="me-2" />
            Skills
          </h2>
        </Col>
      </Row>
      <Row>
        {/* Left Column */}
        <Col md={6}>
          <div className="mb-3">
            <b>HTML / CSS</b>
            <ProgressBar animated now={skillLevels.htmlCss} label={`${skillLevels.htmlCss}%`} />
          </div>

          <div className="mb-3">
            <b>JavaScript</b>
            <ProgressBar animated now={skillLevels.javascript} label={`${skillLevels.javascript}%`}  />
          </div>

          <div className="mb-3">
            <b>React.js</b>
            <ProgressBar animated now={skillLevels.react} label={`${skillLevels.react}%`} />
          </div>
          <div className="mb-3">
            <b>Python</b>
            <ProgressBar animated now={skillLevels.python} label={`${skillLevels.python}%`} />
          </div>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          <div className="mb-3">
            <b>Node.js</b>
            <ProgressBar animated now={skillLevels.node} label={`${skillLevels.node}%`} />
          </div>

          <div className="mb-3">
            <b>MongoDB / SQL</b>
            <ProgressBar animated now={skillLevels.mongoSQL} label={`${skillLevels.mongoSQL}%`} />
          </div>

          <div className="mb-3">
            <b>Express.js</b>
            <ProgressBar animated now={skillLevels.express} label={`${skillLevels.express}%`} />
          </div>
          <div className="mb-3">
            <b>Django</b>
            <ProgressBar animated now={skillLevels.django} label={`${skillLevels.django}%`} />
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default About;
