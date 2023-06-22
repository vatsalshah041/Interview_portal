import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
  link: {
    textDecoration: "none!important",
    color: "#ffffff",
  },
}));
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {

      var axios = require('axios');
      var data = JSON.stringify({
        "sapid": values.username,
        "password": values.password
      });

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://devacc3.pythonanywhere.com/accounts/login/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function(response){
          console.log(response.data);
          if (response.data.token) {
                  if (response.data.is_interviewer) {
                    console.log("INTERVIEWER")
                    navigate('/admin')
                  }
                  else {
                    localStorage.setItem("sapid", formik.values.username);
                    console.log("Interviwee")
                    // alert("Success!");
                    navigate('/dashboard')
                  }
                } else {
                  navigate("/signup");
                  alert("Invalid cred");
                }
                localStorage.setItem("token", response.data.token);
              })
              .catch(function (error) {
                console.log(error);
              });
    },
  });

  return (
    <div className="outerDiv2ForLogin">
      <div className="innerDiv2">
        <div className="loginHeader">LOGIN</div>
        <div className="userPass"> Sapid</div>
        <TextField
          id="username"
          name="username"
          type="username"
          helperText={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
     
          variant="standard"
          className="smallfield"
          InputProps={{
            startAdornment: <InputAdornment position="start"><PersonIcon></PersonIcon></InputAdornment>,
          }}
        />

        <div className="userPass">Password</div>
        <TextField
          variant="standard"


         className="smallfield"
          id="password"
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          InputProps={{
            startAdornment: <InputAdornment position="start"><KeyIcon></KeyIcon></InputAdornment>,
          }}
        />
         {/* <TextField id="outlined-basic" label="Password" variant="outlined" 
         InputProps={{
          startAdornment: <InputAdornment position="start"><KeyIcon></KeyIcon></InputAdornment>,
        }}/> */}
         <div className="dhaaText1">Don't have an account?
            <Link to="/signup" 
            className="dhaaText2"
            >
               <span style={{marginLeft:5,color:"#8985F2",fontSize:"16px",textDecoration:"none !important"}}>Sign Up</span>
            </Link>
          </div>
        <Button
          className="signBttn"
          variant="contained"
          type="submit"
          onClick={formik.handleSubmit}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;
