import React, { useEffect, useState } from "react";
import { Carousel } from "rsuite";
import { Image } from "next/dist/client/image-component";
import setTime from '../assets/img/settime.png';
import mrBet from '../assets/img/MrBetpng.png';
import wrazzle from '../assets/img/wrazzle.png';

const Projects = () => {
  const [ isClient, setIsClient ] = useState(false)

  // I'm intentionally rendering different content on the client using the useEffect hook.
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div id="projects" className="project-wrapper">
      <h2 className="project-heading">Works</h2>
      <span className="project-sub-heading">
        I had the pleasure of working with these awesome projects.
      </span>

      {isClient ? <Carousel
        placement='bottom'
        shape='bar'
        autoplay
        className="custom-slider"
      >
        <Image src={setTime} alt="setTime"/>
        <Image src={mrBet} alt="mrBet"/>
        <Image src={wrazzle} alt="wrazzle"/>
      </Carousel> : null}
    </div>
  )
}

export default Projects;