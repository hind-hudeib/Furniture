import Carousel from "react-bootstrap/Carousel";
// import heroImg from "../images/counter-timer-img.png";
import counterImg from "../images/counter-timer-img.png";
import sofa1 from "../images/arm-chair-01-removebg-preview.png";
import sofa2 from "../images/arm-chair-03-removebg-preview.png";
import sofa3 from "../images/single-sofa-02-removebg-preview.png";
import sofa4 from "../images/single-sofa-04-removebg-preview.png";

import "./slider.css";

function UncontrolledExample() {
  return (
    <Carousel className="slider__timer">
      <Carousel.Item>
        <img className="iiim" src={counterImg} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="iiim" src={sofa1} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="iiim" src={sofa2} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="iiim" src={sofa3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="iiim" src={sofa4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
