import React, { useState } from "react";
import { Modal, Button } from 'rsuite';

const WinnerModal = ({ isWin, winner, restart }) => {
  const [ open, setOpen ] = useState(true);

  const handleClose = () => {
    setOpen(false);
    restart()
  }

  return (
    <>
      <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
        <audio id="audio" autoPlay>
          <source src="/sounds/winner-sound.mp3" type="audio/mpeg"/>
        </audio>
        <Modal.Body>
          <h3>{isWin ? 'You are WIN!' : `Player ${winner} winner !`}</h3>
          <p>Do you want to play again?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinnerModal