import React from 'react';
import { Col } from 'react-bootstrap';
import SocialMediaIcons from '../../Common/SocialMediaIcons';


const FooterWhoAreWeColumn = () => {
  return (
    <Col md={3}>
      <h5>Biz Kimiz</h5>

      <p>
        Ürün tasarımları, web sayfasının dizaynı, fotoğraf ve video çekimleri gibi dijital alanda çalışmalar yapıyoruz.
          </p>

      <br />

      <SocialMediaIcons size="2x" />

    </Col>

  );
};

export default FooterWhoAreWeColumn;