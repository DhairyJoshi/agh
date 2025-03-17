import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import logo from '../../assets/images/agh_logo1.png'
import { Divider } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Dialogue(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (status) => {
        setOpen(false);
        props?.fn(status)
    };

    return (
        <React.Fragment>

            <Dialog
                open={props?.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose(false)}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    backdropFilter: "blur(10px)"
                }}
            >
                <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={logo} alt="logo" style={{ width: "100px" }} />
                </DialogTitle>
                <Divider sx={{ background: "black" }} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ fontWeight: "700", color: "#000000" }}>
                        {props?.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)} sx={{ color: "#000000" }}>Cancel</Button>
                    <Button
                        onClick={() => handleClose(true)}
                        className='btn btn-main d-inline-flex align-items-center rounded-pill gap-8'>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
