import React from "react";
import { Image } from "next/dist/client/image-component";
import { skills } from "../constants";
import { Progress } from 'rsuite';
import '../splitting'

const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <h2 className="skill-heading">{`< skills />`}</h2>
      <div className="skills-container">
        {skills.map((skill) => {
          const { name, level, info, img, color } = skill;
          return (
            <div className="skill-card" key={name}>
              <Image src={img} className="skill-img" alt={name}/>
              <div className="skill-level">
                <Progress.Circle percent={level} strokeColor={color}/>
              </div>
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