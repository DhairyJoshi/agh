import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { my_order_list } from '../../redux/actions/CheckoutAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IMAGE } from '../../redux/apis/Api';
import { Alert } from '@mui/material';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#299e60",
        color: theme.palette.common.white,
        padding: "10px",  // Remove padding for header cells

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: "10px",  // Remove padding for body cells

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

function formattedDate(date) {
    const dateObj = new Date(date);

    // Extract day, month, and year
    const day = String(dateObj.getDate()).padStart(2, '0');    // Pads with '0' if needed
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');  // Months are zero-based
    const year = dateObj.getFullYear();

    // Format as "DD/MM/YYYY"
    return `${day}/${month}/${year}`;
}


export default function OrderList() {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const order = useSelector((state) => state?.checkout?.order_history)

    console.log("order", order)
    useEffect(() => {
        (async () => {
            dispatch(my_order_list({ user_id: user?.data?.id || null }))
        })()
    }, [])
    return (
        <div className='container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        order && order?.data?.map((data, index) => (
                            <>
                                <a href={IMAGE + data?.invoice} target='_blank' style={{ display: "flex", justifyContent: "right", width: "100%", cursor: "pointer", color: "#000000" }}>
                                    <div>
                                        <div style={{ fontWeight: "700" }}>
                                            <i className="ph ph-arrow-line-down" style={{ marginRight: "5px" }}></i>
                                            Download Invoice
                                        </div>
                                    </div>
                                </a>
                                <Grid
                                    size={12}
                                    key={index}
                                    sx={{
                                        border: "2px solid #299e60",
                                        padding: "20px",
                                        borderRadius: "10px"
                                    }}>

                                    <Grid container spacing={2} className="mb-10">
                                        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
                                            <span style={{ fontSize: "17px", fontWeight: "700" }}>Date : {formattedDate(data?.created_at)}</span><br />
                                            <span style={{ fontSize: "17px", fontWeight: "700" }}>Payment ID : {data?.payment_id}</span><br /><br />
                                            {
                                                data?.status === "Delivered" ?
                                                    <div>
                                                        <span style={{ fontSize: "17px", fontWeight: "700" }}>Status :</span>   <span className='delivered-class'> {data?.status}</span>
                                                    </div>
                                                    :
                                                    (data?.status === "On the way") ?
                                                        <div>
                                                            <span style={{ fontSize: "17px", fontWeight: "700" }}>Status :</span>   <span className='on-the-way-class'> {data?.status}</span>
                                                        </div>
                                                        :
                                                        <div>
                                                            <span style={{ fontSize: "17px", fontWeight: "700" }}>Status :</span>   <span className='accepted-class'> {data?.status}</span>
                                                        </div>

                                            }
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 6 }} >

                                            <div style={{ textAlign: "right" }}>
                                                <span style={{ fontSize: "17px", fontWeight: "700" }}>Delivery Address</span><br />
                                                <span >{data?.house_no},{data?.house_name}</span><br />
                                                <span >{data?.street_road},{data?.area}</span><br />
                                                <span >{data?.city}-{data?.pincode}</span>
                                            </div>

                                        </Grid>
                                    </Grid>

                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>#</StyledTableCell>
                                                    <StyledTableCell align="center">Image</StyledTableCell>
                                                    <StyledTableCell align="center">Product</StyledTableCell>
                                                    <StyledTableCell align="center">Amount</StyledTableCell>
                                                    <StyledTableCell align="center">Quantity</StyledTableCell>
                                                    <StyledTableCell align="right">Total</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data?.product?.map((row, index) => (
                                                    <StyledTableRow key={index}>
                                                        <StyledTableCell component="th" scope="row">
                                                            {index + 1}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            <img src={IMAGE + "/" + row?.image} alt='img' style={{ width: "50px" }} />
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            {row?.product_name}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            ₹{Number(row?.purchased_product_price).toFixed(2)}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            x {row?.purchased_product_quantity}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            ₹{(Number(row?.purchased_product_quantity) * Number(row?.purchased_product_price)).toFixed(2)}
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                                <StyledTableRow>
                                                    <StyledTableCell colSpan={5} align="right">
                                                        <span style={{ fontSize: "17px", fontWeight: "700" }}>Paid Amount</span>

                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        <span style={{ fontSize: "17px", fontWeight: "700" }}>₹{Number(data?.paid_amount).toFixed(2)}</span>

                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


                                </Grid>
                            </>
                        ))
                    }
                    {
                        !order?.data?.length ?
                            <Grid
                                size={12}
                            >
                                <Alert severity="warning">You have not placed any order yet !</Alert>

                            </Grid>




                            :
                            <></>
                    }



                </Grid>
            </Box>

        </div>
    )
}
