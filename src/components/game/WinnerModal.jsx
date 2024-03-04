import React, { useState } from "react";
import { Modal, Button } from 'rsuite';

const WinnerModal = ({ winner, restart }) => {
  const [ open, setOpen ] = useState(true);

  const handleClose = () => {
    setOpen(false);
    restart()
  }

  return (
    <>
      <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
        <Modal.Body>
          <h3>Player {winner} winner !</h3>
          <p>Do you want play again?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinnerModal