import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import profileImg from '../../assets/images/user.png'
import Grid from '@mui/material/Grid2';
import logo from '../../assets/images/agh_logo1.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Profile(props) {

    const user = JSON.parse(localStorage.getItem('user'))



    const handleClose = () => {
        props?.setOpen(false);
    };

    return (
        <React.Fragment>

            <Dialog
                open={props?.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <div style={{ position: "absolute", display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <img src={logo} alt="logo" style={{ width: "100px", marginLeft: "1rem", marginTop: "1rem" }} />
                    <div onClick={handleClose} style={{ fontSize: "30px", marginRight: ".2rem", marginTop: ".2rem" }}>
                        <i className="ph ph-x"></i>

                    </div>
                </div>
                <Grid sx={{ padding: "30px", alignItems: "center" }} container spacing={2}>
                    <Grid size={{ sm: 12, xs: 12, md: 6, lg: 6, xl: 6 }}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <img src={profileImg} alt='profile' style={{ width: "200px" }} />
                        </div>
                    </Grid>
                    <Grid size={{ sm: 12, xs: 12, md: 6, lg: 6, xl: 6 }}>
                        <div className="row gy-4">
                            <div className="col-sm-12 col-xs-12">
                                <label
                                    htmlFor="name"
                                    className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                >
                                    Full Name{" "}
                                    {/* <span className="text-danger text-xl line-height-1">*</span>{" "} */}
                                </label>
                                <input
                                    type="text"
                                    className="common-input px-16"
                                    id="name"
                                    value={user?.data?.name}
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="col-sm-12 col-xs-12">
                                <label
                                    htmlFor="name"
                                    className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                >
                                    Email{" "}
                                    {/* <span className="text-danger text-xl line-height-1">*</span>{" "} */}
                                </label>
                                <input
                                    type="text"
                                    className="common-input px-16"
                                    id="name"
                                    value={user?.data?.email}
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="col-sm-12 col-xs-12">
                                <label
                                    htmlFor="name"
                                    className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                >
                                    Mobile{" "}
                                    {/* <span className="text-danger text-xl line-height-1">*</span>{" "} */}
                                </label>
                                <input
                                    type="text"
                                    className="common-input px-16"
                                    id="name"
                                    value={user?.data?.mobile_number}
                                    placeholder="Full name"
                                />
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Dialog>
        </React.Fragment>)
}
