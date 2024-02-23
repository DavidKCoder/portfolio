import React, { useState } from "react";
import { Navbar, Nav } from 'rsuite';
import Link from 'next/link';
import SocialMedia from "./SocialMedia";

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props} id="header">
      <Link href="/" passHref className="brand-name">
        <span className="rs-navbar-brand">{'<DK/>'} <span>DavidKarapetyan</span></span>
      </Link>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Link href="/#home" passHref>
          <span className="rs-navbar-item">Home</span>
        </Link>
        <Link href="/#skills" passHref>
          <span className="rs-navbar-item">Skills</span>
        </Link>
        <Nav.Menu title="About">
          <Link href="/#projects" passHref>
            <span className="rs-navbar-item">Projects</span>
          </Link>
          <Link href="/#skills" passHref>
            <span className="rs-navbar-item">Skills</span>
          </Link>
          <Link href="/#contact" passHref>
            <span className="rs-navbar-item">Contact</span>
          </Link>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <SocialMedia/>
      </Nav>
    </Navbar>
  );
};

const Header = () => {
  const [ activeKey, setActiveKey ] = useState(null);

  return (
    <CustomNavbar appearance="subtle" activeKey={activeKey} onSelect={setActiveKey}/>
  )
}

export default Header;
