import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    btn: {
        color: '#ffffff',
        backgroundColor: '#3e9364',
    },
});

export default function Inquirybutton() {
    const [open, setOpen] = useState(false);
    const [pop, setPop] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenpop = () => {
        setPop(true);
    };

    const handleClosepop = () => {
        setPop(false);
    };
    const classes = useStyles();

    return (
        <div>
            <Button
                className={classes.btn}
                variant="outlined"
                onClick={handleClickOpen}
            >
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
                        label="What is your name?"
                        type="message"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="contactinformation"
                        label="Your contact information"
                        type="message"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="message"
                        label="Please enter a message"
                        type="message"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <div>
                        <Button onClick={handleClickOpenpop}>
                            Send Request
                        </Button>
                        <Dialog
                            onClick={handleClose}
                            open={pop}
                            onClose={handleClosepop}
                        >
                            <DialogTitle>Congrats</DialogTitle>

                            <DialogContent>
                                <DialogContentText>
                                    Request Sent
                                </DialogContentText>
                                <Button onClick={handleClose}>ok</Button>
                            </DialogContent>
                        </Dialog>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
