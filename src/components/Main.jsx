import React, { useEffect, useState } from "react";
import { Container, Content, Divider } from 'rsuite';
import Header from "./Header";
import Greeting from "./Greeting";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import '../scroll'
import Loader from "./Loader";
import FooterSection from "./FooterSection";
import BackTop from "./BackTop";
import ThemeToggle from "./ThemeToggle";

const Main = () => {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="show-container">
      <ThemeToggle/>
      <Container>
        <Header/>
        <Content>
          <Divider className="divider"/>
          <Greeting/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Divider className="divider footer"/>
        </Content>
        <FooterSection/>
      </Container>
      <BackTop/>
    </div>
  )
}

export default Main;