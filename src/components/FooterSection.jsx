import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Image } from "next/dist/client/image-component";
import { social } from "../constants";

const FooterSection = () => {
  const [ showSocialMediaIcons, setShowSocialMediaIcons ] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSocialMediaIcons(window.innerWidth > 450);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer>
      {!showSocialMediaIcons && (
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
      {showSocialMediaIcons && (
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