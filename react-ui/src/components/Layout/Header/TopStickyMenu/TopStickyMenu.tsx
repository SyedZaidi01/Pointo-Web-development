import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "../../../Common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const TopStickyMenu = ({ isSticky }) => {
  return (
    <Navbar
      className="sidebar"
      expand="lg"
      sticky="top"
      style={
        isSticky
          ? { position: "sticky", backgroundColor: "#fff" }
          : { position: "absolute" }
      }
    >
      <Navbar.Brand>
        <Link href="/">
          <a>
            {isSticky ? (
              <Logo isLight={!isSticky} id="logo" width="160px" height="50px" />
            ) : (
              <Logo isLight={!isSticky} id="logo" width="160px" height="50px" />
            )}
          </a>
        </Link>
      </Navbar.Brand>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        height={600}
      ></Sidebar>

      
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle> */}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ width: "100%" }} className="mr-auto">
          <ul
            className="sticky-menu-list"
            style={isSticky ? { background: "" } : { background: "" }}
          >
            <Link href="/kurumsal">
              <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                Kurumsal
                <span></span>
              </li>
            </Link>
            <Link href="/hizmetlerimiz">
              <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                Hizmetlerimiz
                <span></span>
              </li>
            </Link>
            <Link href="/hizmetlerimiz">
              <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                Referanslarimiz
                <span></span>
              </li>
            </Link>
            <Link href="/insanKaynaklari">
              <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                İnsan Kaynakları
                <span></span>
              </li>
            </Link>
            <Link href="/iletisim">
              <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                İletişim
                <span></span>
              </li>
            </Link>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopStickyMenu;
