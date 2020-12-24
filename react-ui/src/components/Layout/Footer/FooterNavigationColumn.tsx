import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const FooterNavigationColumn = () => {
  return (
    <Col md={3}>
      <h5>Navigasyon</h5>

      <ul id="navigation">
        <Link href="/kurumsal">
          <li>
            Kurumsal
            <span></span>
          </li>
        </Link>
        <Link href="/hizmetlerimiz">
          <li>
            Hizmetlerimiz
            <span></span>
          </li>
        </Link>
        <Link href="/referanslarimiz">
          <li>
            Referanslarimiz
            <span></span>
          </li>
        </Link>
        <Link href="/insanKaynaklari">
          <li>
            İnsan Kaynakları
            <span></span>
          </li>
        </Link>
        <Link href="/iletisim">
          <li>
            İletişim
            <span></span>
          </li>
        </Link>
      </ul>
    </Col>
  );
};

export default FooterNavigationColumn;
