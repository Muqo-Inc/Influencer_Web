import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import AppleStoreLogo from "../../../resources/images/app-store-badge.svg";
import GooglePlayBadge from "../../../resources/images/google-play-badge.svg";
import { Link } from "react-router-dom";
import MuqoIcon from "../../../resources/images/mq.svg";
import "./navbar.css";
export const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light" fixed="top">
        <Navbar.Brand to="/" as={Link}>
          <Image src={MuqoIcon} className="navbar-brand-img" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="justify-content-end ">
            <Navbar.Brand href="#home">
              <img
                src={AppleStoreLogo}
                width="128px"
                height="128px"
                className="d-inline-block align-top"
                alt="app store logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">
              <img
                src={GooglePlayBadge}
                width="128px"
                height="128px"
                className="d-inline-block align-top"
                alt="google play store logo"
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
