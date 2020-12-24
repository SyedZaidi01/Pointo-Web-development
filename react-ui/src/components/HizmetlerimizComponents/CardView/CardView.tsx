import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faAngleDown, faLaptopCode, faChartBar, faHeadset, faRobot, faPeopleCarry, faPhone, faPhoneAlt, faMobileAlt, faBuilding, faTasks, faIndustry, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Link from "next/link";

const CardView = () => {
  return (
    <Fragment>
      <Row className="card-view-row">
        <CardGroup className="card-group text=center">
          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'yazilim-danismanlik-hizmetleri' }}}
          >
            <Card id="card-hizmetler">
              <FontAwesomeIcon icon={faLaptopCode} />
              <Card.Body>
                <Card.Title>Yazılım Danışmanlık</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'yapay-zeka-ile-veri-analitigi-nedir-ne-degildir' }}}
          >
            <Card id="card-2-hizmetler">
            <FontAwesomeIcon icon={faChartBar} />
              <Card.Body>
                <Card.Title>Yapay Zeka ile Veri Analitiği Nedir</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın{" "} */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'sap-danismanlik-hizmeti' }}}
          >
            <Card id="card-3-hizmetler">
              <FontAwesomeIcon icon={faHeadset} />
              <Card.Body>
                <Card.Title>SAP Danışmanlık</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'rpa-nedir-sagladigi-avantajlar-nelerdir' }}}
          >
            <Card id="card-4-hizmetler">
              <FontAwesomeIcon icon={faRobot} />
              <Card.Body>
                <Card.Title>RPA</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>
        </CardGroup>
      </Row>
      <Row className="card-view-row">
        <CardGroup className="card-group">
          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'ozel-cozumler' }}}
          >
            <Card id="card-5-hizmetler">
              <FontAwesomeIcon icon={faPeopleCarry} />
              <Card.Body>
                <Card.Title>Özel Çözümler</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'musteri-iliskileri-yonetimi' }}}
          >
            <Card id="card-6-hizmetler">
              <FontAwesomeIcon icon={faPhone} />
              <Card.Body>
                <Card.Title>Müşteri İlişkileri Yönetimi</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'mobil-danismanlik-hizmetleri' }}}
          >
            <Card id="card-7-hizmetler">
              <FontAwesomeIcon icon={faMobileAlt} />
              <Card.Body>
                <Card.Title>Mobil Danışmanlık</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'kurumsal-performans-yonetimi' }}}>
            <Card id="card-8-hizmetler">
              <FontAwesomeIcon icon={faBuilding} />
              <Card.Body>
                <Card.Title>Kurumsal Performans Yönetimi</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>            
          </Link>


        </CardGroup>
      </Row>

      <Row className="card-view-row">
        <CardGroup className="card-group">
          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'is-sureçleri-yonetimi' }}}
          >
            <Card id="card-5-hizmetler">
              <FontAwesomeIcon icon={faTasks} />
              <Card.Body>
                <Card.Title>İş Süreçleri Yönetimi</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'endustri-4-nedir' }}}
          >
            <Card id="card-6-hizmetler">
              <FontAwesomeIcon icon={faIndustry} />
              <Card.Body>
                <Card.Title>Endüstri</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>

          <Link
            href={{ pathname: "/hizmetlerimiz/[...slug]",
            query: { slug: 'devops-danismanlik-hizmetleri' }}}
          >
            <Card id="card-7-hizmetler">
              <FontAwesomeIcon icon={faCodeBranch} />
              <Card.Body>
                <Card.Title>Devops Danışmanlık</Card.Title>
                <Card.Text>
                  {/* Arama Motoru Optimizasyonu ile sitelerinizi üst sıralara
                  taşıyın */}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <FontAwesomeIcon icon={faAngleDown} />
              </Card.Footer>
            </Card>
          </Link>
        </CardGroup>
      </Row>
    </Fragment>
  );
};

export default CardView;
