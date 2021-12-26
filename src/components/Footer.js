import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
 
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shahi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Shahi</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
      
            <li className="social-icons">
              <a
                href="https://twitter.com/INDIA63247218"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shahi-s-356643156/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
