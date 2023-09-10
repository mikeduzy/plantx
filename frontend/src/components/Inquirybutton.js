import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Inquirybutton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Inquiry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you like this plant, please send a request
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Please enter a message"
            type="message"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
