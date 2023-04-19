import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Home.module.css";

import Image from 'next/image'
import logo from '../assets/images/logo.png'
import {usePathname} from 'next/navigation';
import { useEffect, useState } from "react";

import NavBAr from "../component/navbar/navbar";


function NavBar() {

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };

  // useEffect(() => {
  //   let backgroundTransparacyVar = clientWindowHeight / 600;

  //   if (backgroundTransparacyVar < 1) {
  //     let paddingVar = 30 - backgroundTransparacyVar * 20;
  //     let boxShadowVar = backgroundTransparacyVar * 0.1;
  //     setBackgroundTransparacy(backgroundTransparacyVar);
  //     setPadding(paddingVar);
  //     setBoxShadow(boxShadowVar);
  //   }
  // }, [clientWindowHeight]);


const path = usePathname();

  return (
    <>
      {/* <Navbar
        className="main-nav"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <Image src={logo} alt="/" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-list">
              <Nav.Link className={`$ `} href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar/>
    </>
  );
}

export default NavBar;
