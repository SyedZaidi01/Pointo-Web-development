import { url } from 'inspector';
import React from 'react';
import Widget from '../../Common/Widget';
import { Button, Col, Image, Row } from 'react-bootstrap';


const WhyPointo = () => {
    return (
        <Widget id="why-pointo" dark>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Image src="/images/vector-smart-object.png" id="paper-plane" />
                </Col>

                <Col xs={12} sm={12} md={12} lg={6}>

                    <h5>Neden Pointo?</h5>
                    <h1>Kalite, Güven, Vizyon, Gelecek...</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, nostrud exerci tation ullamcorper delgado consectuerer.
                    </p>


                    <Row>
                        <Col md={4}>
                            <div className="icon-container">
                                <div className='image-container'>
                                    <Image className='icon' src='./icons/gem.png' />
                                </div>
                                <span>KALİTE</span>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="icon-container">
                                <div className='image-container'>
                                    <Image className='icon' src='./icons/cup.png' />
                                </div>
                                <span>BAŞARI</span>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="icon-container">
                                <div className='image-container'>
                                    <Image className='icon' src='./icons/rocket.png' />
                                </div>
                                <span>VİZYON</span>
                            </div>
                        </Col>
                    </Row>


                    <Button className="btn btn-lg btn-pointo-dark">Hakkımızda</Button>
                </Col>
            </Row>


        </Widget>
    )
};

export default WhyPointo;