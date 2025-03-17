import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function Loading(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={props?.open}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
