import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from "typewriter-effect";

export const Projects = () => {
    const [activeKey, setActiveKey] = useState("first"); // Estado para a aba ativa
    const [textTyped, setTextTyped] = useState(false); // Estado para verificar se o texto já foi digitado

    const projects = [
        {
            title: "To-do-list",
            description: "Back End",
            imgUrl: projImg1,
        },
        {
            title: "Site Educacional",
            description: "Front End",
            imgUrl: projImg2,
        },
        {
            title: "Jogo da Velha",
            description: "Full Stack",
            imgUrl: projImg3,
        },
        {
            title: "Cardápio Digital",
            description: "Full Stack",
            imgUrl: projImg4,
        },
        {
            title: "CRUD",
            description: "Back End",
            imgUrl: projImg5,
        },
        {
            title: "Portifólio",
            description: "Full Stack",
            imgUrl: projImg6,
        },
    ];

    const marianaText = `
        Transitei da agronomia para a tecnologia, onde iniciei minha carreira no curso de Análise e Desenvolvimento de Sistemas, especializando-me como desenvolvedora Full Stack. Atualmente, estou aprofundando minha experiência com Java, Spring, React, Vue.js e SQL.

Na minha vida pessoal, sou noiva de uma parceira incrível, mãe de pets, entusiasta de botânica, apaixonada por jogos de tabuleiro e praticante de Crossfit. Acredito que minha participação nos times gera vantagens mútuas, pois trago autenticidade, dedicação e inovação para promover o crescimento do conhecimento, impulsionar projetos e fortalecer equipes. Estou pronta para abraçar e crescer com as oportunidades dessa jornada!
    `;

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projetos</h2>
                                    <p>
                                    Aqui estão alguns dos meus projetos, que refletem minha paixão por criar soluções práticas e meu domínio em técnicas de desenvolvimento. Eles destacam minha capacidade de transformar desafios em resultados inovadores, combinando criatividade e eficiência. Aproveite para conhecer mais sobre mim e minhas habilidades profissionais!</p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        activeKey={activeKey}
                                        onSelect={(key) => setActiveKey(key)} // Atualiza o estado quando uma aba é selecionada
                                    >
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projetos</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Sobre mim</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Habilidades</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                {activeKey === "second" && !textTyped && (
                                                    <div className="text-container">
                                                        <Typewriter
                                                            onInit={(typewriter) => {
                                                                typewriter
                                                                    .typeString(marianaText)
                                                                    .start();
                                                            }}
                                                            options={{
                                                                strings: [marianaText],
                                                                loop: false,
                                                                delay: 25,
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                                {textTyped && <div className="text-container"><p>{marianaText}</p></div>} {/* Exibe o texto finalizado */}
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    <br></br>Back End: Java, Spring Framework
                                                    <br></br>Front End: React, Vue.js, Angular, Bootstrap
                                                    <br></br>Dados: SQL (PostgreSQL, MySQL), Hibernate e Docker
                                                    <br></br>Testes: JUnity, Jest, Mockito,Postman
                                                    <br></br>Ferramentas: Git, GitHub, VS Code
                                                    <br></br>Soft Skills: Comunicação, Resiliência, Adaptabilidade,<br></br> Inteligência Emocional e Trabalho em Equipe.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    );
};
