import React from "react";
import { Image } from "next/dist/client/image-component";

function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <Image src={item.img} width={'100%'} height={80} alt=""/>
    </div>
  )
}

export default Card