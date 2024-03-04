import React, { useState } from "react";
import { Navbar, Nav, Drawer, IconButton } from 'rsuite';
import Link from 'next/link';
import SocialMedia from "./SocialMedia";
import useWindowWidth from "../hooks/useWindowWidth";
import MenuIcon from '@rsuite/icons/Menu';

const CustomNavbar = ({ windowWidth, onSelect, activeKey, open, setOpen, ...props }) => {
  return (
    <Navbar {...props} id="header">
      <span className="brand-name">
        <span className="rs-navbar-brand">{'<DK/>'} <span>DavidKarapetyan</span></span>
        {windowWidth < 500 &&
        <IconButton onClick={() => setOpen(true)} icon={<MenuIcon/>} color="blue" appearance="primary"/>
        }
      </span>
      {windowWidth > 500 ?
        <>
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Link href="/#home" passHref>
              <span className="rs-navbar-item">Home</span>
            </Link>
            <Link href="/#skills" passHref>
              <span className="rs-navbar-item">Skills</span>
            </Link>
            <Link href="/game" passHref><span className="rs-navbar-item">Game</span>
            </Link>
            <Nav.Menu title="About">
              <Link href="/#projects" passHref>
                <span className="rs-navbar-item">Projects</span>
              </Link>
              <Link href="/#about" passHref>
                <span className="rs-navbar-item">About Me</span>
              </Link>
              <Link href="/#contact" passHref>
                <span className="rs-navbar-item">Contact</span>
              </Link>
            </Nav.Menu>
          </Nav>
          <Nav pullRight>
            <SocialMedia/>
          </Nav>
        </> :
        <Drawer size="60%" open={open} onClose={() => setOpen(false)}>
          <Drawer.Body>
            <Nav onSelect={onSelect} activeKey={activeKey}>
              <Link href="/#home" passHref>
                <span className="rs-navbar-item">Home</span>
              </Link>
              <Link href="/#skills" passHref>
                <span className="rs-navbar-item">Skills</span>
              </Link>
              <Link href="/game" passHref>
                <span className="rs-navbar-item">Game</span>
              </Link>
              <Nav.Menu title="About">
                <Link href="/#projects" passHref>
                  <span className="rs-navbar-item">Projects</span>
                </Link>
                <Link href="/#about" passHref>
                  <span className="rs-navbar-item">About Me</span>
                </Link>
                <Link href="/#contact" passHref>
                  <span className="rs-navbar-item">Contact</span>
                </Link>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <SocialMedia/>
            </Nav>
          </Drawer.Body>
        </Drawer>
      }
    </Navbar>
  );
};

const Header = () => {
  const windowWidth = useWindowWidth();
  const [ activeKey, setActiveKey ] = useState(null);
  const [ open, setOpen ] = useState(false);

  return (
    <CustomNavbar
      windowWidth={windowWidth}
      appearance="subtle"
      activeKey={activeKey}
      onSelect={setActiveKey}
      open={open}
      setOpen={setOpen}/>
  )
}

export default Header;
