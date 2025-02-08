import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-black py-3 mt-auto w-100 max-height-100rem">
      <Container>
        <Row className="text-center">
          <Col md={12} className="mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="mailto:yourmail@gmail.com" className="text-black mx-2">
              <FaEnvelope size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaGithub size={24} />
            </a>
          </Col>
          <Col md={12}>
            <p className="mb-0">&copy; {new Date().getFullYear()} Prakash Tech. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
