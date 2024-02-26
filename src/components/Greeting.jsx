import React from "react";
import MouseScroll from "./MouseScroll";

const Greeting = () => {
  return (
    <div id="home" className="greeting-wrapper">
      <div className="developer">Software Engineer</div>
      <div className="greeting">
        <p className="tag">{`<h1>`}</p>
        <div className="hey">
          <p>Hey</p>
          <p>I&apos;m <span className="text-blink">David</span>,</p>
          <p>Software Engineer</p>
        </div>
        <p className="tag">{`<h1>`}</p>
        <div className="sub-text">
          <p className="tag">{`<p>`}</p>
          <p className="text">
            I&apos;m passionate about creating exceptional web experiences that help businesses grow. Whether you need a
            stunning website, a powerful web application, or innovative digital solutions, I&apos;m here to bring your
            ideas to life.
          </p>
          <p className="tag">{`</p>`}</p>
        </div>
      </div>
      <MouseScroll/>
    </div>
  )
}

export default Greeting;