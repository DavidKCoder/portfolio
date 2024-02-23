import React from "react";
import Linkedin from "@rsuite/icons/lib/icons/legacy/Linkedin";
import Instagram from "@rsuite/icons/lib/icons/legacy/Instagram";
import Github from "@rsuite/icons/lib/icons/legacy/Github";

const IconComponent = ({ name, alt }) => {
  let icon;

  // Determine the icon based on the name
  switch (name) {
    case "LinkedIn":
      icon = <Linkedin alt={alt}/>;
      break;
    case "Instagram":
      icon = <Instagram alt={alt}/>;
      break;
    case "GitHub":
      icon = <Github alt={alt}/>;
      break;
    default:
      icon = null;
  }

  return icon;
};

export default IconComponent;
