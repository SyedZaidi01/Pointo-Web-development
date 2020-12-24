import { faCrosshairs, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import DetailPage from "../../components/DetailPage/DetailPage";
import Layout from "../../components/Layout/Layout";

const Kurumsal = () => {

  return (
    <Layout>
      <DetailPage
        breadCrumbClass="kurumsal-detail-page"
        pageTitle="Kurumsal"
        src="/images/point-office-setting-inoffice.jpeg"
        >
        <div className="kurumsal-outer-container">
          <div className="kurumsal-company-profile">
            <Row>
              <Col md={{ span: 5, offset: 1 }}>
                <img
                  className="d-block col-md-10"
                  src="/images/about-us.jpg"
                  alt="Third slide"
                />
              </Col>
              <Col md={{ span: 6, offset: 0 }}>
                <h1>About Us</h1>
                <p>
                  Pointo, ihtiyacınız olanı size sunar. İş süreçlerini verimli
                  kılmak ve karlılığınızı artırmak için üstün standartlara sahip
                  yazılım çözümleri, robotik ve endüstri 4.0 projeleri, dijital
                  dönüşümler yaşatacak yenilikçi çalışmalarla iş verimliliğini
                  artıran çözümleri bir araya getirir.
                </p>
              </Col>
            </Row>
          </div>

          <div className="divider-row">
            <Row></Row>
          </div>

          <div className="kurumsal-company-vision">
            {/*  */}
            <Row className="miyon-vizyon-section">
              <Col sm={{span:12}} md={{span:6}}>
                <Row>
                  {/* <Col md={{ span: 2, offset: 3 }}>
                    <FontAwesomeIcon icon={faCrosshairs} />
                  </Col> */}
                  <Col md={{ span: 5, offset:4 }}>
                    <h1>Misyon</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <p>
                      Yurt içinde ve yurt dışında hizmet verdiğimiz tüm
                      müşterilerimize en yüksek kalitede hizmeti kesintisiz bir
                      şekilde sağlamak ve nitelikli insan kaynağının
                      yetiştirilmesine ve gelişmesine önem veren, dünya
                      standartlarında, çağın yeniliklerini takip eden ve
                      yenilikleri kullanan bir marka olmak çalışmalarımızın esas
                      amaçları arasındadır.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  {/* <Col md={{ span: 2, offset: 3 }}>
                    <FontAwesomeIcon icon={faEye} />
                  </Col> */}
                  <Col md={{offset:4}}>
                    <h1>Vizyon</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <p>
                      Pointo, marka değerini arttırmak ve yeni müşteriler
                      kazanmak için hizmet standartlarını geliştirir. Ar-Ge
                      yatırımlarına önem verir ve böylece hızlılık, verimlilik
                      ve pratiklik sağlayacak yeni teknoloji ve uygulamalar ile
                      çağın ötesine geçer.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/*  */}
            <Row className="iso-row-head">
              <Col>
                <Row>
                  <Col md={{ span: 2, offset: 5 }}>
                    <Link href={"/docs/Pointo_ISO_9001.pdf"}>
                      <a target="_blank">
                        <img src="/images/iso.png" alt="" />
                      </a>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <p>
                      Pointo, tüm operasyonlarda kaliteyi sürekli izlemenize ve
                      yönetmenize yardımcı olacak kalite yönetim sistemi olan
                      ISO 9001: 2015 sertifikasına layık görülmüştür. Dünyanın
                      en yaygın kalite yönetim standardı olan ISO 9001,
                      kuruluşların hizmet ve performans yönetimi konusunda
                      kalitelerini artırmaya ve süreklilik sağlanmasına olanak
                      tanımaktadır.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col md={{ span: 2, offset: 5 }}>
                    <Link href={"/docs/Pointo_ISO_27001.pdf"}>
                      <a target="_blank">
                        <img src="/images/iso.png" alt="" />
                      </a>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                    <p>
                      Pointo, kurumların bilgi varlıklarını güvenli yöntemlerle
                      korumalarına yardımcı olan Uluslararası kabul görmüş ISO /
                      IEC 27001 sertifikasına layık görülmüştür. Sistem tüm mali
                      ve gizli bilgileri daha etkin korumanıza, izinsiz ve yasa
                      dışı yollardan erişilme olasılığını en aza indirmenize
                      imkan vermektedir.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </DetailPage>
    </Layout>
  );
};
export default Kurumsal;
