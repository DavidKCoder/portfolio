import React from "react";
import { Container, Content } from 'rsuite';
import Greeting from "./Greeting";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// import SocialMedia from "./SocialMedia";

const Main = () => {
  return (
    <div className="show-container">
      <Container>
        <Content>
          <Greeting/>
          <About/>
          <Skills/>
          <Projects/>
          {/*<SocialMedia/>*/}
          <Contact/>
        </Content>
      </Container>
    </div>
  )
}

export default Main;