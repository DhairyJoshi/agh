import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import logo from '../../assets/images/agh_logo1.png'
import PhoneInput from 'react-phone-input-2';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthAction from '../../redux/actions/AuthAction';
import AlertMessage from '../common/AlertMessage';
import { bindActionCreators } from 'redux';
import { jwtDecode } from "jwt-decode";


export default function Login(props) {
    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState(null);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [form, setForm] = React.useState({})
    const [sendOtp, setSendOtp] = React.useState(false)
    const [profile, setProfile] = React.useState(false)
    const [otp, setOtp] = React.useState('');
    const dispatch = useDispatch()
    const Auth = useSelector((state) => state?.auth?.otpSend)
    const { sendOTPforLogin, verifyOtpforLogin, profileComplete, SocialLogin } = bindActionCreators(AuthAction, dispatch)
    const ip_address = localStorage.getItem('ip_address')

    const handleClose = () => {
        setOpen(false);
        props?.state(false)
    };

    const handleGoogleLogin = async (data) => {
        let GoogleData = jwtDecode(data?.credential)
        console.log(GoogleData)
        if (GoogleData?.email_verified) {
            form.email = GoogleData.email
            form.name = GoogleData.name
            const resData = await SocialLogin(form)
            console.log("Res", resData)
            if (resData?.statuscode === 200) {
                setMessage({ ...message, message: "Logged in successfully", flag: "success" })
                setIsOpen(true)
                form.user_id = resData?.data?.id

                if (resData?.first_time === "true") {
                    setProfile(true)
                    form.flag = "email"

                } else {
                    localStorage.setItem("user", JSON.stringify(resData))
                    localStorage.setItem("login", true)
                    props?.state(false)
                }
            }
            else {
                setMessage({ ...message, message: resData?.message, flag: "error" })
                setIsOpen(true)
            }
        }
    }

    const sendOtpMobile = async (data) => {
        if (form?.mobile_number) {
            const resData = await sendOTPforLogin(form)
            if (resData?.statuscode === 200) {
                setSendOtp(true)
                setMessage({ ...message, message: resData?.message, flag: "success" })
                setOtp(resData?.OTP)
                setIsOpen(true)
            }
            else {
                setMessage({ ...message, message: resData?.message, flag: "error" })
                setIsOpen(true)
            }

        }
        else {
            setMessage({ ...message, message: "Enter mobile number", flag: "error" })
            setIsOpen(true)

        }

    }
    const verifyOTP = async (data) => {
        const resData = await verifyOtpforLogin({ ...form, OTP: otp })
        if (resData?.statuscode === 200) {
            form.user_id = resData?.data?.id
            if (resData?.first_time === "true") {
                setProfile(true)
            }
            else {
                localStorage.setItem("user", JSON.stringify(resData))
                localStorage.setItem("login", true)
                props?.state(false)
            }
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setIsOpen(true)
        }
        else {
            setMessage({ ...message, message: resData?.message, flag: "error" })
            setIsOpen(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        form.ip_address = ip_address

        const formlist = new FormData()
        Object.keys(form).map((key) => formlist.append(key, form?.[key]));

        const resData = await profileComplete(formlist)
        console.log("Response", resData)
        if (resData?.statuscode === 200) {
            localStorage.setItem("user", JSON.stringify(resData))
            localStorage.setItem("login", true)
            setMessage({ ...message, message: resData?.message, flag: "success" })
            setIsOpen(true)
            props?.state(false)
        } else {
            setMessage({ ...message, message: resData?.message, flag: "error" })
            setIsOpen(true)

        }

    }

    return (
        <React.Fragment>
            <AlertMessage open={isOpen} message={message} state={setIsOpen} />
            <Dialog
                fullWidth={fullWidth}
                maxWidth={'sm'}
                open={props?.open}
                onClose={handleClose}
                sx={{
                    backdropFilter: "blur(10px)"
                }}
            >
                <DialogTitle>
                    <img src={logo} alt='logo' style={{ width: "100px" }} />
                </DialogTitle>
                <DialogContent>
                    {
                        !sendOtp && !profile &&
                        <div>
                            <DialogContentText>
                                Login to buy quality farming products and tools to boost your harvest!
                            </DialogContentText>
                            <Box
                                noValidate
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    m: 'auto',
                                    width: 'fit-content',
                                    // height: "35vh"
                                }}
                                className='py-20'
                            >
                                <div>
                                    <PhoneInput
                                        labelId="demo-simple-select-label"
                                        country={'in'}
                                        required={true}
                                        // value={form?.phoneNumber}

                                        onChange={(phone, countryCode) => {
                                            setForm({
                                                ...form,
                                                mobile_number:
                                                    (countryCode.dialCode === "91" ? (phone[2] >= 6 ? phone.substring(2) : countryCode.dialCode)
                                                        : phone.substring(2)),
                                                countryCode: "+" + countryCode.dialCode,
                                            });
                                            console.log(form)
                                        }}
                                        isValid={(value, country) => {
                                            if (country.dialCode === "91" && value[2] < 6) {
                                                return 'Invalid Number'
                                            } else {
                                                return true;
                                            }
                                        }}
                                        inputStyle={{
                                            height: '45px',
                                            width: "99.99%"
                                        }}

                                    />
                                </div>
                                <div>
                                    <span className='py-10 d-flex' style={{ justifyContent: "center" }}>or</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <GoogleOAuthProvider clientId="846756764119-91p1ls3cem6e7jtc6t3cpmgb54vd1751.apps.googleusercontent.com">
                                        <GoogleLogin
                                            auto_select={false}
                                            width={250}
                                            theme="outline"
                                            onSuccess={credentialResponse => {
                                                // console.log(credentialResponse)
                                                handleGoogleLogin(credentialResponse)
                                            }}
                                            onError={() => {
                                                console.log('Login Failed')
                                            }}
                                            useOneTap
                                        />
                                    </GoogleOAuthProvider>
                                </div>

                            </Box>
                        </div>
                    }
                    {
                        sendOtp && !profile &&
                        <div>
                            <DialogContentText>
                                Please enter the OTP sent to your registered mobile number to proceed.
                            </DialogContentText>
                            <Box
                                noValidate
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    m: 'auto',
                                    width: 'fit-content',
                                    // height: "35vh"
                                }}
                                className='py-20'
                            >
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>  -  </span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{
                                        height: "45px",
                                        width: "45px",
                                        borderRadius: "10px",
                                        border: "2px solid black"
                                    }}
                                />
                            </Box>
                        </div>
                    }
                    {
                        profile &&
                        <div>
                            {
                                form?.flag !== "email" ?
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-sm-8 col-xs-8">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Full Name{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        required
                                                        value={form?.name}
                                                        type="text"
                                                        className="common-input px-16"
                                                        id="name"
                                                        placeholder="Full name"
                                                    />
                                                </div>
                                            </div>
                                            <div className='py-10' style={{ display: "flex", justifyContent: "center" }}>

                                                <div className="col-sm-8 col-xs-8">
                                                    <label
                                                        htmlFor="email"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Email Address{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        type="email"
                                                        className="common-input px-16"
                                                        id="email"
                                                        placeholder="Email address"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='py-10' style={{ display: "flex", justifyContent: "center" }}>
                                                <button type='submit' className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    :
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ height: "35vh" }}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>

                                                <div className="col-sm-8 col-xs-8">
                                                    <label
                                                        htmlFor="name"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Full Name{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <input

                                                        value={form?.name}
                                                        type="text"
                                                        className="common-input px-16"
                                                        id="name"
                                                        placeholder="Full name"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center" }}>

                                                <div className="col-sm-8 col-xs-8">

                                                    <label
                                                        htmlFor="email"
                                                        className="flex-align gap-4 text-sm font-heading-two text-gray-900 fw-semibold mb-4"
                                                    >
                                                        Mobile{" "}
                                                        <span className="text-danger text-xl line-height-1">*</span>{" "}
                                                    </label>
                                                    <PhoneInput
                                                        labelId="demo-simple-select-label"
                                                        country={'in'}
                                                        required={true}
                                                        // value={form?.phoneNumber}

                                                        onChange={(phone, countryCode) => {
                                                            setForm({
                                                                ...form,
                                                                mobile_number:
                                                                    (countryCode.dialCode === "91" ? (phone[2] >= 6 ? phone.substring(2) : countryCode.dialCode)
                                                                        : phone.substring(2)),
                                                                countryCode: "+" + countryCode.dialCode,
                                                            });
                                                            console.log(form)
                                                        }}
                                                        isValid={(value, country) => {
                                                            if (country.dialCode === "91" && value[2] < 6) {
                                                                return 'Invalid Number'
                                                            } else {
                                                                return true;
                                                            }
                                                        }}
                                                        inputStyle={{
                                                            height: '55px',
                                                            width: "99.99%"
                                                        }}

                                                    />
                                                </div>

                                            </div>
                                            <div className='py-20' style={{ display: "flex", justifyContent: "center" }}>
                                                <button onSubmit={handleSubmit} type='submit' className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                            }

                        </div>
                    }

                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: sendOtp ? "space-evenly" : "center" }}>
                    {
                        sendOtp && !profile &&
                        <div
                            to="#"
                            className="d-flex"
                            style={{ alignItems: "center", cursor: "pointer" }}
                            onClick={() => setSendOtp(false)}
                        >
                            <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-left" />{" "}
                            </span>
                            {" "}Back

                        </div>
                    }
                    {
                        !profile &&
                        <div
                            to="#"
                            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                            onClick={!sendOtp ? sendOtpMobile : verifyOTP}
                        >
                            Next{" "}
                            <span className="icon text-xl d-flex">
                                <i className="ph ph-arrow-right" />{" "}
                            </span>
                        </div>
                    }

                </DialogActions>
            </Dialog>
        </React.Fragment>)
}
