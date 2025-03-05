import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function AlertMessage(props) {

    const handleClose = (event, reason) => {
    

        props?.state(false);
    };

    return (
        <div>
            <Snackbar open={props?.open} autoHideDuration={2500} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={props?.message?.flag}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {props?.message?.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
