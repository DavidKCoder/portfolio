import React, { useEffect, useState } from "react";
import { Carousel } from "rsuite";
import { Image } from "next/dist/client/image-component";
import setTime from '../assets/img/set_time.png';
import mrBet from '../assets/img/MrBetpng.png';
import wrazzle from '../assets/img/wrazzle_project.png';
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();
  const [ isClient, setIsClient ] = useState(false)

  // I'm intentionally rendering different content on the client using the useEffect hook.
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClickOnImage = (slug) => {
    router.push(`/project/${slug}`)
  }

  return (
    <div id="projects" className="project-wrapper">
      <h2 className="project-heading">{`< projects />`}</h2>
      <span className="project-sub-heading">
        I had the pleasure of working with these awesome projects.
      </span>

      {isClient ? <Carousel
        placement='bottom'
        shape='bar'
        autoplay
        className="custom-slider"
      >
        <Image src={setTime} alt="setTime" onClick={() => handleClickOnImage('settime')}/>
        <Image src={mrBet} alt="mrBet" onClick={() => handleClickOnImage('mrbet')}/>
        <Image src={wrazzle} alt="wrazzle" onClick={() => handleClickOnImage('wrazzle')}/>
      </Carousel> : null}
    </div>
  )
}

export default Projects;