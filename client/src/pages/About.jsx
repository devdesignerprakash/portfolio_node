import React from "react";
import { Container, Row, Col, Image, Card,ProgressBar} from "react-bootstrap";
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
  const skills = [
    { name: "HTML / CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React.js", value: 80 },
    { name: "Node.js", value: 75 },
    { name: "MongoDB / SQL", value: 70 },
  ];
  return (
    <Container className="mt-5">
      {/* First Row: About Me Title and Description */}
      <Row className="text-center">
        <Col>
          <h1 className="mb-3">About Me</h1>
          <p className="lead">
            <b>
              I am a Fullstack Developer from Kathmandu, Nepal, creating
              efficient web applications and seamless user experiences. Always
              eager to explore new technologies and improve skills.
            </b>
          </p>
        </Col>
      </Row>

      {/* Second Row: Image & Bio Data */}
      <Row className="align-items-center mt-4">
        {/* Left Column: Profile Image */}
        <Col md={4} className="text-center">
          <Image
            src="public/profile.jpg"
            roundedCircle
            fluid
            alt="My Photo"
            className="shadow"
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
                  <b>Birthday:</b> 01 Jan 1995
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  <b>Website:</b> www.example.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <b>Phone:</b> +977 9800000000
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  <b>City:</b> Kathmandu, Nepal
                </li>
                <li>
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  <b>Degree:</b> Bachelor's in Computer Science
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <b>Email:</b> example@email.com
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
      {/* Skills Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">
            <FontAwesomeIcon icon={faCode} className="me-2" />
            Skills
          </h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3">
              <b>{skill.name}</b>
              <ProgressBar now={skill.value} label={`${skill.value}%`} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
