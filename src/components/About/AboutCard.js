import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahi Shreshth </span>
            from <span className="purple"> India.</span>
            <br />I am  pursuing CS  in Bachelor of Engoneering in Chandigarh University ,Punjab
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in national and international Hacathons.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech and Non-Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring from Travelling to Anime
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It's really feel good to accomplish the target and building beyond the learning"{" "}
          </p>
          <footer className="blockquote-footer">Shahi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
