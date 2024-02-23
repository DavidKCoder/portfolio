import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar, Stack, Grid, Row, Col } from 'rsuite';
import SocialMedia from "./SocialMedia";
import { calculateAge } from "../myAge";

const About = () => {
  const [ ageString, setAgeString ] = useState("");

  useEffect(() => {
    const updateAgeString = () => {
      const age = calculateAge(new Date('1991-09-16'));
      setAgeString(`${age.years} years, ${age.months} months, ${age.days} days.`);
    };

    // Initial update
    updateAgeString();

    // Update the age string every second
    const intervalId = setInterval(updateAgeString, 864e+7,);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const infoData = [
    { title: 'Name', value: 'David Karapetyan' },
    { title: 'Age', value: `${ageString}` },
    { title: 'Phone', value: '+374(55) 753272' },
    { title: 'Email', value: 'karapetyand91@gmail.com' },
    { title: 'Address', value: 'Armenia, Yerevan' },
  ]

  return (
    <Stack id="about" className="about-wrapper">
      <Button>About Me</Button>
      <Grid fluid className="about-section">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={16}>
            <div className="about-left-content">
              <div className="about-text">
                <span className="tag">{`<p>`}</span>
                <p>Hello!</p>
                My name is David and I specialize in web development that utilizes HTML, CSS, JS, and <span
                className="tag">REACT</span> etc.
                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code
                that
                works. Striving to never stop learning and improving.
                When I&apos;m not coding, I am writing blogs, reading, or picking up some new hands-on art project
                like
                photography.
                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                <span className="tag">{`<p>`}</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div className="about-right-content">
              {infoData.map((info) => {
                const { title, value } = info;
                return (
                  <div key={title}>
                    <span className="title">{title}: </span>
                    <span className="value">{value}</span>
                  </div>
                )
              })}
              <Navbar appearance="subtle">
                <Nav>
                  <SocialMedia/>
                </Nav>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Grid>
    </Stack>
  )
}

export default About;