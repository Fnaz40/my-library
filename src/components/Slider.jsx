import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import image from './images/abc.jpeg';
import img from './images/library-2.jpg';
import imag from './images/slide-image.png';


function Slider() {
    return (
        <Carousel>
            <Carousel.Item className="img-slide">
                <img
                    className="d-block w-100"
                    id="slide"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption className="Caption">
                    <h3>Book Library</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img-slide">
                <img
                    className="d-block w-100"
                    id="slide"
                    src={img}
                    alt="second slide"
                />

                <Carousel.Caption className="Caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img-slide">
                <img
                    className="d-block w-100"
                    id="slide"
                    src={imag}
                    alt="Third slide"
                />

                <Carousel.Caption className="Caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;