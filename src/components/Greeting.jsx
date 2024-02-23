import React from "react";
import MouseScroll from "./MouseScroll";

const Greeting = () => {
  return (
    <div id="home" className="greeting-wrapper">
      <div className="developer">Developer</div>
      <div className="greeting">
        <p className="tag">{`<h1>`}</p>
        <div className="hey">
          <p>Hey</p>
          <p>I&apos;m <span>David</span>,</p>
          <p>Software Engineer</p>
        </div>
        <p className="tag">{`<h1>`}</p>
        <div className="sub-text">
          <p className="tag">{`<p>`}</p>
          <p className="text">
            I help business grow by crafting amazing web experiences.
            If you’re looking for a developer that likes
            to get stuff done,
          </p>
          <p className="tag">{`</p>`}</p>
        </div>
      </div>
      <MouseScroll/>
    </div>
  )
}

export default Greeting;