import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Weedrobot.png";
import projImg2 from "../assets/img/automatizacion .png";
import projImg3 from "../assets/img/habbid.png";
import projImg4 from "../assets/img/comunicaciones.jpeg";
import projImg5 from "../assets/img/IA.jpeg";
import projImg6 from "../assets/img/volone.png";
import umng from "../assets/img/umng.jpg";
import ONE from "../assets/img/ONE.jpg";
import UDEA from "../assets/img/UDEA.png";
import cymetria from "../assets/img/cymetria.png";
import facti from "../assets/img/facti.png";
import slb from "../assets/img/slb.jpg";
import standardsalud from "../assets/img/standardsalud.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: (
        <>
          Habidd web application
          <br />
          <span style={{ textDecoration: "underline" }}>
            JavaScript, React, Figma
          </span>
        </>
      ),
      description:
        "Development of a web application distributed to healthcare centers, such as dental clinics, for appointment scheduling and management of patient records with specialized modules.",
      imgUrl: projImg3,
    },
    {
      title: (
        <>
          Empty Chair Detection Application
          <br />
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            MATLAB, Python
          </span>
        </>
      ),
      description:
        "Developed an Artificial Intelligence algorithm using a region-based convolutional neural network (R-CNN) trained in MATLAB.",
      imgUrl: projImg5,
    },

    {
      title: (
        <>
          Brewery Plant Simulation
          <br />
          <span style={{ textDecoration: "underline" }}>
            C, Javascript, React, Node.js
          </span>
        </>
      ),
      description:
        "Developed a brewery simulation in Unity, integrated with Siemens S7-1500 PLC for real-time control, enabling interaction between virtual and physical systems and enhancing automation efficiency.",
      imgUrl: projImg2,
    },
    {
      title: (
        <>
          Volone web application
          <br />
          <span style={{ textDecoration: "underline" }}>
            JavaScript, React, Figma
          </span>
        </>
      ),
      description:
        "Web application for digital menus in restaurants, with an order system, purchases, payments, and dish information, combining artificial intelligence.",
      imgUrl: projImg6,
    },
    {
      title: (
        <>
          Conveyor Belt System
          <br />
          <span style={{ textDecoration: "underline" }}>
            C, Unity, TIA PORTAL
          </span>
        </>
      ),
      description:
        "Developed with Arduino, integrated with a server for remote monitoring, and a web interface using React and Next.js for real-time data visualization, enabling control and supervision of the conveyor belt through the web platform.",
      imgUrl: projImg4,
    },
    {
      title: (
        <>
          Weed-Removing Robot for Vegetable Gardens
          <br />
          <span style={{ textDecoration: "underline" }}>
            C, Dart, MATLAB, Solidworks
          </span>
        </>
      ),
      description:
        "Implemented AI for weed identification via camera vision, designed durable mechanical components for various terrains, developed tools for weed removal without damaging crops, and enabled remote control operation using an ESP32 board and a Flutter app.",
      imgUrl: projImg1,
    },
  ];

  const Estudios = [
    {
      title: "Universidad Militar Nueva Granada",
      description: "Mechatronics Engineering",
      description2: "Jan. 2019 - Apr. 2025",
      imgUrl: umng,
    },
    {
      title: "Oracle Next Education",
      description:
        "Beginner Programming Training / Front End Training / React Training",
      description2: "May. 2023 - Dec. 2023",
      imgUrl: ONE,
    },
    {
      title: "Universidad de Antioquia",
      description:
        " Programming skills training program with emphasis on mobile application development",
      description2: "May. 2021 - Dec. 2021",
      imgUrl: UDEA,
    },
    {
      title: "Cymetria",
      description: "Cloud computing",
      description2: "Sep. 2024 - Dec. 2024",
      imgUrl: cymetria,
    },
  ];

  const Trabajos = [
    {
      title: "Fundación Artística y Cultural Talentos - Freelancer",
      description: "Website Administrator",
      description2: "Jun. 2020 - Present",
      imgUrl: facti,
    },
    {
      title: "SLB",
      description: "Engineering Intern",
      description2: "Dec. 2023 - Dec. 2024",
      imgUrl: slb,
    },
    {
      title: "Standard Salud",
      description: " Front End web developer",
      description2: "Sep. 2023 - Jan. 2025",
      imgUrl: standardsalud,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>EXPERIENCIE</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experiencie</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Estudios.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {Trabajos.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
