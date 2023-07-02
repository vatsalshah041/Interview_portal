import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import "../styles/signupPage.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
//icons:
import InputAdornment from '@mui/material/InputAdornment';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PersonIcon from '@mui/icons-material/Person';
import NumbersIcon from '@mui/icons-material/Numbers';
import SchoolIcon from '@mui/icons-material/School';
import KeyIcon from '@mui/icons-material/Key';

const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
    },
    MuiInputLabel: {
      defaultProps: {
       shrink: false,
      },
    }
  },
}));
const Signup = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      setPassword: "",
      confirmPassword: "",
      sapid: "",
      grad_year: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      username: Yup.string()
        .max(30, "Exceeded maximum charecter length of 30")
        .required("Required"),
      setPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("setPassword"), null], "password does not match"),
      sapid: Yup.string()
        .min(11, "Minimum legth for SapId is 11")
        .max(11, "Exceeded maximum charecter length of 11")
        .required("Required"),
      grad_year: Yup.string()
        .min(4, "Enter in YYYY format")
        .max(4, "Exceeded maximum charecter length of 4")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      var axios = require("axios");
      navigate("/login");
      var data = JSON.stringify({
        user: {
          name: values.username,
          sapid: values.sapid,
          password: values.setPassword,
          confirm_password: values.confirmPassword,
          grad_year: values.grad_year,
          email: values.email,
        },
       
      });
    
      var config = {
        method: "post",
        url: "https://devacc3.pythonanywhere.com/accounts/interviewee_register/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          navigate("/login");
        })
        .catch(function (error)
        {
          console.log(error);
        });
    },
  });

  return (
    <div className="outerDiv2ForSignup">
      <div className="innerDiv2">
        <div className="loginHeader">SIGNUP</div>
        <div className="userPass" style={{marginTop:"10"}}>Email</div>
        <TextField
          //InputLabelProps={{shrink: false}} 
          variant="standard"
          id="email"
          name="email"
          type="email"
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className={classes.field}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachEmailIcon/>
              </InputAdornment>
            ),
          }}
        />

        <div className="userPass"> Username</div>
        <TextField
          variant="standard"
          id="username"
          name="username"
          helperText={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                //  sx={{color:"#333333"}}
                 />
              </InputAdornment>
            ),
          }}
        />

        <div className="userPass"> SAP ID</div>
        <TextField
          variant="standard"
          id="sapid"
          type="sapid"
          name="sapid"
          helperText={
            formik.touched.sapid && formik.errors.sapid
              ? formik.errors.sapid
              : null
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.sapid}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NumbersIcon 
                />
              </InputAdornment>
            ),
          }}
        />

        <div className="userPass"> Graduation Year</div>
        <TextField
          variant="standard"
          id="grad_year"
          name="grad_year"
          helperText={
            formik.touched.grad_year && formik.errors.grad_year
              ? formik.errors.grad_year
              : null
          }
          type="grad_year"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.grad_year}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon />
              </InputAdornment>
            ),
          }}
        />

        <div className="userPass">Password</div>
        <TextField
          label={null}
          variant="standard"
          id="setPassword"
          name="setPassword"
          helperText={
            formik.touched.setPassword && formik.errors.setPassword
              ? formik.errors.setPassword
              : null
          }
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.setPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        

        <div className="userPass"> Confirm Password</div>
        <TextField

          variant="standard"
          id="confirmPassword"
          name="confirmPassword"
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className="dhaaText" style={{paddingTop:"1rem",paddingBottom:"1rem",}}>
          <div className="dhaaText0">Sign Up with 
          <img src="https://img.icons8.com/color/48/null/google-logo.png" style={{height:27,paddingLeft:"0.5rem"}}/> <img src="https://img.icons8.com/ios-filled/50/null/github.png"  style={{height:27,marginLeft:5}}/>
          </div>
          <div className="dhaaText1">Already have an account?
            <Link to="/login" 
            className="dhaaText2"
            >
               <span style={{marginLeft:5,color:"#8985F2",fontSize:"16px",textDecoration:"none !important"}}>Login</span>
            </Link>
          </div>
        </div>
        
        <Button
          variant="contained"
         // className="signBttn"
          onClick={formik.handleSubmit}
          sx={{backgroundColor:"#5154CE",
          }}
         
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Signup;