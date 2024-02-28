import React from "react";
import { Container, Content } from 'rsuite';
import Greeting from "./Greeting";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import '../scroll';

const Main = () => {
  return (
    <div className="show-container">
      <Container>
        <Content>
          <Greeting/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </Content>
      </Container>
    </div>
  )
}

export default Main;