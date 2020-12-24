import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Navbar } from "react-bootstrap";
import { faBars, faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";

const TopBarMenu = ({ isSticky }) => {
  return (
    <Navbar
      className="topBarMenu"
      style={isSticky ? { position: "relative" } : { position: "absolute" }}
    >
      {/* <Col sm={3} className="topBarMenu-item topBarMenu-item-with-border">
        <FontAwesomeIcon
          icon={faBars}
          pull="right"
          size={"lg"}
          fontSize="16px"
          fontFamily="Poppins"
        />
      </Col> */}
      <Col
        sm={{ span: 6, offset: 2 }}
        className="topBarMenu-item topBarMenu-item-with-border"
      >
        <Col md={6} className="float-left">
          <Link href={"/kvkk"}>K.V.K.K.</Link>

          <Link href={"/hakkimizda"}>Hakkımızda</Link>

          <Link href={"/projelerimiz"}>Projelerimiz</Link>
        </Col>

        <Col md={6} className="float-right">
          <Link href={"tel:+908503464737"}>
            <span>
              <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
              +90 850 346 47 37
            </span>
          </Link>

          <Link href="mailto:info@pointo.com.tr">
          <span>
            <FontAwesomeIcon icon={faAt} size={"lg"} />
            info@pointo.com.tr
          </span>
          </Link>
        </Col>
      </Col>

      <Col sm={3} className="topBarMenu-item social-links">
        <SocialMediaIcons />
      </Col>
    </Navbar>
  );
};

export default TopBarMenu;
