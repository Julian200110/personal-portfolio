import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import Python from "../assets/img/python.png";
import vue from "../assets/img/vue.png";
import angular from "../assets/img/angularjs.png";
import java from "../assets/img/java.png";
import mongo from "../assets/img/mongo-db.png";
import mysql from "../assets/img/mysql.png";
import c from "../assets/img/c-language.png";
import AWS from "../assets/img/amazon-web-services.png";
import BI from "../assets/img/BI.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Image" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>mongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>Mysql</h5>
                </div>
                <div className="item">
                  <img src={AWS} alt="Image" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>c++</h5>
                </div>
                <div className="item">
                  <img src={BI} alt="Image" />
                  <h5>Power BI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
