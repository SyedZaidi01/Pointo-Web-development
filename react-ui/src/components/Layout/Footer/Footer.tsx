import React from "react";
import Logo from "../../Common/Logo";
import { Col, Container, Form, Row } from "react-bootstrap";

import FooterWhoAreWeColumn from "./FooterWhoAreWeColumn";
import FooterAddressColumn from "./FooterAddressColumn";
import FooterContactColumn from "./FooterContactColumn";
import FooterNavigationColumn from "./FooterNavigationColumn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid style={{ textAlign: "center" }} id="footer-logo-section">
        <Link href="/">
          <Logo isLight={true} width="138px" height="44px" />
        </Link>
      </Container>

      <Container fluid id="information-section" className="row">
        <FooterWhoAreWeColumn />

        <FooterAddressColumn />

        <FooterContactColumn />

        <FooterNavigationColumn />
      </Container>

      <Container fluid id="copy-right-section">
        Copyright © 2020 - All Rights Reserved
      </Container>
    </footer>
  );
};

export default Footer;
