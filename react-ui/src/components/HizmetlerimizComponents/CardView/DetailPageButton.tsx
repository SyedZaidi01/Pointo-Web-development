import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Col, Image ,Row } from "react-bootstrap";


const DetailPageButton = () => {
  return (
    <Fragment>
      <Row>
        <Col md={{span:8, offset:2}} lg={{span:6, offset:3}}   className="detail-page-button-col1">
          <h6>KURUMSAL FİKİRLER</h6>
          <h2>Çözüm Ortağınız</h2>
          <p>
            Uluslararası Dijital Pazarlama Ajansı Pointo bir çok markaya SEO,
            İçerik Pazarlama, Dijital PR, Sosyal Medya Yönetimi, Performans
            Reklamcılığı, E-Mail Marketing, Web Tasarım, Danışmanlık ve Yönetim
            hizmetleri vermektedir.
          </p>
        </Col>
        {/* <Col md={3} lg={4} className="detail-page-button-col2"> 
          <Button className="detail"><Image src="/images/small-rocket.png"></Image>Proje Başlat</Button>
        </Col> */}
      </Row>
    </Fragment>
  );
};
export default DetailPageButton;
