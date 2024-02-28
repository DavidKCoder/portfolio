import React from "react";
import PageNextIcon from '@rsuite/icons/PageNext';

const BackTop = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <span className="back-top" onClick={scrollToTop}>
      <PageNextIcon/>
    </span>
  )
}

export default BackTop;