import React, { useEffect } from 'react'
import TopHeader from '../home/TopHeader'
import Footer from '../home/Footer'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import success from '../../assets/images/success.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTES } from '../../constant/routes';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Success() {
    const location = useLocation()
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const time = currentDate.toTimeString();
    const navigation = useNavigate()
    console.log("location", location?.state)
    useEffect(() => {
        if (!location?.state?.razorpay_payment_id) {
            navigation(ROUTES.home, { replace: true })
        }
    }, [])


    return (
        <div>
            <TopHeader />
            <div className='container mt-30'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid size={{ md: 12, sm: 12, xs: 12,lg:6 }} sx={{ border: "2px solid", padding: "20px", borderRadius: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={success} alt='success' style={{ width: "100px" }} />
                            </div>
                            <div style={{
                                textAlign: "center"
                            }}
                                className='mt-10'
                            >
                                <h4>Your payment was successfull !</h4>
                                <p style={{ fontWeight: "700" }}>
                                    {date + time}
                                </p>
                                <span>
                                    Your payment is processed securely.
                                </span><br />
                                <span className='mt-20'>
                                    Payment ID
                                </span>
                                <h6 style={{ color: "green" }}>
                                    {location?.state?.razorpay_payment_id}
                                </h6>
                                <p>
                                    Need help?
                                </p>
                                <p>
                                    Contact our support team
                                </p>
                                <p>
                                    or
                                </p>
                                <p>
                                    mail us on osmagrimart@gmail.com.
                                </p>
                                <div
                                    to="/cart"
                                    className="product-card__cart btn btn-main mt-20"
                                    onClick={() => navigation(ROUTES.MyOrders, { replace: true })}

                                >
                                    Track Order <i className="ph ph-truck" />
                                </div>
                            </div>

                        </Grid>

                    </Grid>
                </Box>
            </div>
            <Footer />
        </div>
    )
}
