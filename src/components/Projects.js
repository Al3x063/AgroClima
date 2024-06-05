import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import zanahoriaImg from "../assets/img/zanahoria.png";
import lechugaImg from "../assets/img/lechuga.png";
import pimentonImg from "../assets/img/pimenton.png";
import cebollaImg from "../assets/img/cebolla.png";
import papaImg from "../assets/img/papa.png";
import maizImg from "../assets/img/maiz.png";
import yucaImg from "../assets/img/yuca.png";
import remolachaImg from "../assets/img/remolacha.png";

export const Projects = () => {

  const projects = [
    {
      title: "Zanahoria",
      description: "Un vegetal de raíz comestible, generalmente de color naranja.",
      care: "Requiere suelo suelto y bien drenado, pleno sol y riego regular.",
      imgUrl: zanahoriaImg,
    },
    {
      title: "Lechuga",
      description: "Una planta de hojas verdes que se usa comúnmente en ensaladas.",
      care: "Prefiere suelo fértil y bien drenado, sombra parcial a pleno sol y riego constante.",
      imgUrl: lechugaImg,
    },
    {
      title: "Pimentón",
      description: "Un vegetal colorido, conocido por su sabor dulce y su uso en muchas cocinas.",
      care: "Necesita suelo rico en nutrientes, pleno sol y riego moderado.",
      imgUrl: pimentonImg,
    },
    {
      title: "Cebolla",
      description: "Un vegetal de bulbo con un sabor fuerte y picante, utilizado en muchas recetas.",
      care: "Requiere suelo bien drenado, pleno sol y riego regular pero no excesivo.",
      imgUrl: cebollaImg,
    },
    {
      title: "Papa",
      description: "Un tubérculo comestible, básico en muchas dietas alrededor del mundo.",
      care: "Prefiere suelo suelto y bien drenado, pleno sol y riego moderado.",
      imgUrl: papaImg,
    },
    {
      title: "Maíz",
      description: "Un cereal que se utiliza como alimento y en la producción de numerosos productos.",
      care: "Necesita suelo fértil, pleno sol y riego constante durante su crecimiento.",
      imgUrl: maizImg,
    },
    {
      title: "Yuca",
      description: "Un tubérculo comestible conocido también como mandioca, importante en muchas cocinas tropicales.",
      care: "Requiere suelo suelto y arenoso, pleno sol y riego moderado.",
      imgUrl: yucaImg,
    },
    {
      title: "Remolacha",
      description: "Un vegetal de raíz comestible, conocido por su color rojo intenso y su sabor dulce.",
      care: "Prefiere suelo fértil y bien drenado, pleno sol a sombra parcial y riego regular.",
      imgUrl: remolachaImg,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn text-center": "text-center"}>
                  <h2>Tipo de Vegetales</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`project-${index}`}>
                            {project.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={`project-${index}`} key={index}>
                          <Row className="justify-content-center">
                            <Col size={12} sm={6} md={4} className="d-flex justify-content-center">
                              <div className="proj-imgbx">
                                <img src={project.imgUrl} alt={project.title} />
                                <div className="proj-txtx">
                                  <h4>{project.title}</h4>
                                  <span>{project.description}</span>
                                  <p><strong>Cuidados:</strong> {project.care}</p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
