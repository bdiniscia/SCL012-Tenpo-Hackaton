import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import './Tooltip.css'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ErrorOutlineIcon onClick={handleClickOpen}> </ErrorOutlineIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className='tooltipMovements' >
          <DialogContentText id="alert-dialog-description" >
            Recuerda que tu transacción demora 48 horas hábiles en hacerse
            efectiva. Te enviaremos una notificación cuando se realice.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
