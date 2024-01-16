import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import demon from "../../Assets/Projects/demon.jpeg";
import traffic from "../../Assets/Projects/traffic.jpg";
import chat from "../../Assets/Projects/chat.png";
import chess from "../../Assets/Projects/chess.jpg";
import cloud from "../../Assets/Projects/cloud.jpg";
import bitsOfCode from "../../Assets/Projects/ecommerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Projects <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess C++"
              description="My First Project , I designed in 2nd semester using backtracking algorithm." 
              link="https://github.com/shahishree03/chess_old"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demon}
              isBlog={false}
              title="Demonslayer and Demon game Project"
              description="This game I have designes using my Html5, css, scss, javascript based, Itt was also build ending of scond semester"
              link="https://demonslayer-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Based Project"
              description="This Java Chat BAsed project application ,I have developed during my 3rd semester during that I have first ever learnt about java ."
               link="https://github.com/shahishree03/ChaTJAVA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Yoi Keiken OTT Platform"
              description="OTT Platform that uses ReactJS, Movie Database and Firebase " 
              link="https://github.com/shahishree03/Fakeflix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Attendance Project"
              description=" Using HTML5, CSS, ScSS , Javascript, PHP , mysql , build the attendance based project that require in the situation like pandemic for attendance "
              link="https://github.com/shahishree03/attendance_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Vehicle Detction "
              description="In this project , using python ,and visual studio , build the features for detecting vehicle in high rush traffic and counting them , it can predict 95% accuracy within the frame with CNN model etc. I helps in highway and parking and can identify car owner also."
              link="https://github.com/shahishree03/vehicle_detection/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
