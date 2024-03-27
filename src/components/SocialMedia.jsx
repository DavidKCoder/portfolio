import React from "react";
import LinkedIn from "./socialIcons/LinkedIn";
import Instagram from "./socialIcons/Instagram";

const SocialMedia = () => {
  return (
    <div id="social-media" className="social-wrapper">
      <h2 className="contact-heading">{`< social media />`}</h2>
      <p className="contact-sub-heading">
        Discover more about me across various social networks.
      </p>
      <div style={{ width: "50%", margin: 'auto 0', display: 'flex', justifyContent: 'space-between' }}>
        <LinkedIn/>
        <Instagram/>
      </div>
    </div>
  )
}

export default SocialMedia