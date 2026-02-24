import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nathalia Weinfortner</span>{" "}
            from <span className="purple">Goiás, Brazil</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">freelancer</span> at{" "}
            <span className="purple">Freelancer.com</span>.
            <br />I hold an Bachelor&apos;s degree in{" "}
            <span className="purple">Computer Science</span>.
            <br />
            <br />
            Outside of coding, I enjoy a variety of interesting and meaningful hobbies, such as:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cook 👩🏻‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Dog Breeding 🐶
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
