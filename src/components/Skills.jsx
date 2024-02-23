import React from "react";
import { Image } from "next/dist/client/image-component";
import { skills } from "../constants";


const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <h1 className="skill-heading">skills {`</>`}</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          const { name, level, info, img } = skill;
          return (
            <div className="skill-card" key={name}>
              <Image src={img} className="skill-img" alt={name}/>
              < div className="skill-level">{level}</div>
              <h1 className="skill-name">{name}</h1>
              <p className="skill-info">
                {info}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;