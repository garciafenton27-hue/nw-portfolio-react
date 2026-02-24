import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/selfie.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Mechatronics Engineer</b> with <b className="purple">Full Stack Web Development</b> specializing in process automation, industrial automation, and systems integration. 
              I have extensive experience designing and implementing automation solutions involving
              &nbsp;<i><b className="purple">PLC</b></i>&nbsp;
              programming, 
              &nbsp;<i><b className="purple">HMI / SCADA</b></i>&nbsp;
              systems control logic design, and the integration of field instrumentation with operational systems.
              <br />
              <br />
              My technical skill set spans both <b className="purple">Operational Technology (OT)</b> and <b className="purple">Information Technology (IT)</b>. 
              <br />
              <br />
              On the software side, I have hands-on experience in full-stack development using 
              &nbsp;<i><b className="purple">PHP, Laravel, WordPress, Node.js, React, Vue.js, and Python </b></i> 
              enabling me to deliver scalable web applications, backend services, APIs, and data processing solutions that integrate seamlessly with industrial environments.
              <br />
              <br />
              Whenever possible, I love building projects with
              <i><b className="purple"> Node.js </b></i> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
