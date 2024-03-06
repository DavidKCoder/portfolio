import React, { useState } from 'react';
import htmlImg from '../../../assets/img/games/html.png';
import cssImg from '../../../assets/img/games/css.png';
import jsImg from '../../../assets/img/games/js.png';
import scssImg from '../../../assets/img/games/scss.png';
import reactImg from '../../../assets/img/games/react.png';
import vueImg from '../../../assets/img/games/vue.png';
import angularImg from '../../../assets/img/games/angular.png';
import nextJsImg from '../../../assets/img/games/nextjs.png';
import Card from './Card';
import WinnerModal from "../modal/WinnerModal";

const initialCardState = [
  { id: 1, img: htmlImg, stat: "" },
  { id: 1, img: htmlImg, stat: "" },
  { id: 2, img: cssImg, stat: "" },
  { id: 2, img: cssImg, stat: "" },
  { id: 3, img: jsImg, stat: "" },
  { id: 3, img: jsImg, stat: "" },
  { id: 4, img: scssImg, stat: "" },
  { id: 4, img: scssImg, stat: "" },
  { id: 5, img: reactImg, stat: "" },
  { id: 5, img: reactImg, stat: "" },
  { id: 6, img: vueImg, stat: "" },
  { id: 6, img: vueImg, stat: "" },
  { id: 7, img: angularImg, stat: "" },
  { id: 7, img: angularImg, stat: "" },
  { id: 8, img: nextJsImg, stat: "" },
  { id: 8, img: nextJsImg, stat: "" }
].sort(() => Math.random() - 0.5)

function Cards() {
  const [ items, setItems ] = useState(initialCardState);
  const [ prev, setPrev ] = useState(-1);
  const [ isWin, setIsWin ] = useState(false);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct"
      items[prev].stat = "correct"
      setItems([ ...items ]);
      setPrev(-1);
      if (items.every(i => i.stat === 'correct')) {
        setIsWin(true)
      }
    } else {
      items[current].stat = "wrong"
      items[prev].stat = "wrong"
      setItems([ ...items ])
      setTimeout(() => {
        items[current].stat = ""
        items[prev].stat = ""
        setItems([ ...items ])
        setPrev(-1)
      }, 1000)
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active"
      setItems([ ...items ])
      setPrev(id)
    } else {
      check(id)
    }
  }

  return (
    <div className="game-wrapper">
      <audio id="audio" autoPlay>
        <source src="/sounds/forest-walk.mp3" type="audio/mpeg"/>
      </audio>
      <div className="background-container"/>
      <h3 className="game-name">Memory Card Game</h3>
      <div className="memory-game-container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick}/>
        ))}
        {isWin &&
        <WinnerModal isWin={isWin} winner={null} restart={() => setItems(initialCardState)}/>}
      </div>
    </div>
  )
}

export default Cards