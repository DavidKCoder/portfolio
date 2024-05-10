import React from "react";
import Swiper from "./Swiper";

const Projects = () => {
  return (
    <div id="projects" className="project-wrapper">
        <h2 className="project-heading">{`< projects />`}</h2>
        <span className="project-sub-heading">
            I had the pleasure of working with these awesome projects.
        </span>
        <div style={{ padding: "20px 0"}}>
            <Swiper/>
        </div>
    </div>
  )
}

export default Projects;