import { Nav } from "rsuite";
import React, { useEffect, useState } from "react";
import { social } from "../constants";
import IconComponent from "./IconComponent";

const SocialMedia = () => {
  const [ hideSocialName, setHideSocialName ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setHideSocialName(window.innerWidth <= 500)
    };

    window.addEventListener('resize', handleResize);
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      {social.map((so) => {
        const { eventKey, name, link } = so;
        // Dynamically access the icon component based on the name
        const Icon = <IconComponent name={name} alt={name}/>;
        return (
          <Nav.Item key={eventKey} icon={Icon} eventKey={eventKey} href={link} target="_blank">
            {hideSocialName ? null : name}
          </Nav.Item>
        )
      })}
    </>
  )
}

export default SocialMedia;