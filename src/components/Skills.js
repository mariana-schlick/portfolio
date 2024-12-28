import meter1 from "../assets/img/prcnt1.png";
import meter2 from "../assets/img/prcnt2.png";
import meter3 from "../assets/img/prcnt3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Tecnologias</h2>
                            <p>Sou uma Desenvolvedora Full Stack com experiência em React, Java, Vue.js, Bootstrap, Spring Framework e SQL. Utilizo React e Vue.js para criar interfaces dinâmicas e intuitivas, enquanto Java e Spring Framework são minha base para construir backends robustos e escaláveis. Com Bootstrap, garanto designs responsivos, e SQL é minha escolha para gerenciar dados de forma eficiente. Meu objetivo é transformar desafios em soluções práticas e inovadoras.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Back End</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Banco de dados</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Spring Framework</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Front End</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
    }