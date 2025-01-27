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
import UDEA from "../assets/img/UDEA.jpg";
import facti from "../assets/img/facti.png";
import workana from "../assets/img/workana.jpg";
import standardsalud from "../assets/img/standardsalud.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Calculadora",
      description: "Desarrollada en javascript con framework REACT",
      imgUrl: projImg1,
    },
    {
      title: "Planta de cerveza",
      description: "Diseñada en unity conectada a PLC S7-1500",
      imgUrl: projImg2,
    },
    {
      title: "Clon pagina de testimonios freecodecamo",
      description: "Desarrollado en javascript con framework REACT",
      imgUrl: projImg3,
    },
    {
      title: "Banda transportadora",
      description:
        "Desarrollada con arduino conectada aun servidor con pagina diseñada en REACT y NEXTJS",
      imgUrl: projImg4,
    },
    {
      title: "Detección de sillas vacias",
      description:
        "Algortimo de Inteligencia Artifical usando entrenamiento de red convolucional por regiones desarrollado en MATLAB",
      imgUrl: projImg5,
    },
    {
      title: "Contador de Clicks",
      description: "Desarrollado en javascript con framework REACT",
      imgUrl: projImg6,
    },
  ];

  const Estudios = [
    {
      title: "Universidad Militar Nueva Granada",
      description: "Ingenieria mecatronica",
      description2: "2019 - Presente",
      imgUrl: umng,
    },
    {
      title: "Oracle Next Education",
      description:
        "Formacion Principiante en Programacion / Formacion Front End / Formacion React",
      description2: "Mayo 2023 - Presente",
      imgUrl: ONE,
    },
    {
      title: "Universidad de Antioquia",
      description:
        "Programa de Formación Habilidades en Programación con énfasis en Desarrollo de Aplicaciones Móviles",
      description2: "Mayo 2021 - Diciembre 2021",
      imgUrl: UDEA,
    },
  ];

  const Trabajos = [
    {
      title: "Fundación Artística y Cultural Talentos",
      description:
        "Mantenimiento y actualización pagina web WordPress HTML/CSS/PHP",
      description2: "2020 - Presente",
      imgUrl: facti,
    },
    {
      title: "Freelancer",
      description:
        "Desarrollo de proyectos freelance en lenguajes como Python/JavaScript/Java",
      description2: "Junio 2023 - Presente",
      imgUrl: workana,
    },
    {
      title: "Standard Salud",
      description: "Desarrollador front end JavaScript/React",
      description2: "Agosto 2023 - Presente",
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
                  <h2>EXPERIENCIA</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Proyectos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Estudios</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Experiencia Laboral
                        </Nav.Link>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
