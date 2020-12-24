import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Widget from "../../Common/Widget";

const Slider = () => {
  return (
    <Carousel
      interval={300000}
      nextIcon={<Image src="./images/next.png"></Image>}
      prevIcon={<Image src="./images/back.png"></Image>}
    >
      <Carousel.Item className="slider-carousel-item row no-gutters" interval={500000}>
        <video className="videoTag" autoPlay loop muted>
          <source src={"/videos/slider-video.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="slider-carousel-caption">
          <Widget>
            <Row>
              <Col>
                <Image src="./images/portfolyo-title.png"></Image>
              </Col>
            </Row>
            <Row className="slider-detail-header-under">
              <Col md={5} xs={{span:2}} className="slider-detail-header-under-col1">
                <Button>Portfolyo</Button>
              </Col>
              <Col md={5} xs={{span:9, offset:1}} className="slider-detail-header-under-col2">
                <h4>PROFESYONEL FOTOĞRAF ÇEKİMİ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Widget>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="./images/slide-1.jpg" />
        <Carousel.Caption className="slider-carousel-caption">
          <Widget>
            <Row>
              <Col>
                <Image src="./images/portfolyo-title.png"></Image>
              </Col>
            </Row>
            <Row className="slider-detail-header-under">
              <Col className="slider-detail-header-under-col1">
                <Button>Portfolyo</Button>
              </Col>
              <Col md={5} xs={{span:8}} className="slider-detail-header-under-col2">
                <h4>PROFESYONEL FOTOĞRAF ÇEKİMİ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Widget>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-carousel-item">
        <Image src="./images/slide-1.jpg" />
        <Carousel.Caption className="slider-carousel-caption">
          <Widget>
            <Row>
              <Col>
                <Image src="./images/portfolyo-title.png"></Image>
              </Col>
            </Row>
            <Row className="slider-detail-header-under">
              <Col className="slider-detail-header-under-col1">
                <Button>Portfolyo</Button>
              </Col>
              <Col md={5} xs={{span:8}} className="slider-detail-header-under-col2">
                <h4>PROFESYONEL FOTOĞRAF ÇEKİMİ</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Widget>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
