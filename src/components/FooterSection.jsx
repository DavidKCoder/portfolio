import React from "react";
import Link from 'next/link';
import { Image } from "next/dist/client/image-component";
import { social } from "../constants";
import useWindowWidth from "../hooks/useWindowWidth";

const FooterSection = () => {
  const windowWidth = useWindowWidth();

  return (
    <footer>
      {windowWidth < 450 && (
        <div className="social-media-icons">
          {social.map((s) => (
            <Link key={s.name} href={s.link} target="_blank">
              <Image src={s.icon} alt={s.name} width={25}/>
            </Link>
          ))}
        </div>
      )}
      <h4>© 2023 David K. | All rights reserved.</h4>
      <h4>Privacy Policy</h4>
      {windowWidth > 450 && (
        <div className="social-media-icons">
          {social.map((s) => (
            <Link key={s.name} href={s.link} target="_blank">
              <Image src={s.icon} alt={s.name} width={25}/>
            </Link>
          ))}
        </div>
      )}
      <h4>Design by Me</h4>
    </footer>
  );
}

export default FooterSection;