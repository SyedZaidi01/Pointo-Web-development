import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Widget from '../../Common/Widget';

const WeAraAddingValueToYourBrand = () => {
    return (
        <Widget light id="waavtyb-section">

            <Row>
                <Col md={4}>
                    <h4>Değer Katıyoruz</h4>
                    <h1>Markanıza Değer Katıyoruz</h1>
                </Col>

                <Col md={{ offset: 2, span: 6 }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, nostrud exerci tation ullamcorper delgado consectuerer.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} lg={3} className='icon'>
                    <Image src='./images/icon-1.svg' />
                    <h2 className="icon-header">Teknoloji Yazıyoruz</h2>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum siamet.</p>
                </Col>

                <Col xs={12} md={6} lg={3} className='icon'>
                    <Image src='./images/icon-4.svg' />
                    <h2 className="icon-header">Dizayn Ediyoruz</h2>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum siamet.</p>
                </Col>

                <Col xs={12} md={6} lg={3} className='icon'>
                    <Image src='./images/icon-2.svg' />
                    <h2 className="icon-header">Markalaştırıyoruz</h2>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum siamet.</p>
                </Col>

                <Col xs={12} md={6} lg={3} className='icon'>
                    <Image src='./images/icon-3.svg' />
                    <h2 className="icon-header">Destek Veriyoruz</h2>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum siamet.</p>
                </Col>
            </Row>
        </Widget>
    )
}

export default WeAraAddingValueToYourBrand
