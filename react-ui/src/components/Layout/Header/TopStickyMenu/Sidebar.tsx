import React from "react";
import { slide as Menu } from "react-burger-menu";
import Image from 'react-bootstrap/Image';
import Link from "next/link";

const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/kurumsal">
        Kurumsal
      </a>
      <a className="menu-item" href="/hizmetlerimiz">
        Hizmetlerimiz
      </a>
      <a className="menu-item" href="/referanslarimiz">
        Referanslarimiz
      </a>
      <a className="menu-item" href="/insan-kaynaklari">
        İnsan Kaynakları
      </a>
      <a className="menu-item" href="/iletisim">
        İletişim
      </a>
      <a className="menu-item" href="/kvkk">
        K.V.K.K.
      </a>
      <a className="menu-item" href="/hakkimizda">
        Hakkımızda
      </a>
      <a className="menu-item" href="/projelerimiz">
        Projelerimiz
      </a>
        <Link href="/">
            <Image src="/images/pointo-small-logo.jpg"/>
        </Link>

    </Menu>
  );
};

export default Sidebar;
