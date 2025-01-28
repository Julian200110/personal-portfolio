import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/custom.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  function handleDownload() {
    const pdfUrl = "./archivo.pdf"; // Reemplaza esto con la URL real del archivo PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "mi_cv.pdf"); // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100); // Velocidad constante (en milisegundos)
  const [index, setIndex] = useState(1);
  const toRotate = ["Mechatronics Engineer", "Software Developer"];
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeout(() => setDelta(period), 0); // Pausa antes de comenzar a borrar
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100); // Vuelve a la velocidad fija
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {`Hi! I'm Julian:`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="100"
                      data-rotate='["Mechatronics Engineer", "Software Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p style={{ textAlign: "justify" }}>
                    Mechatronics engineer passionate about continuous learning
                    and committed to delivering high-quality results. I have
                    developed strong self-learning abilities, which allow me to
                    quickly adapt to new technologies and thrive in dynamic
                    environments.
                  </p>
                  <button onClick={handleDownload}>
                    Download my CV
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
