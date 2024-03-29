import React from "react";
import Signup from "../components/signup";
import "../styles/signupPage.css";
import "../styles/login_signup.css";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import Backdrop from '../images/image1.png'
const useStyles = makeStyles((theme) => ({
  grad: {
    backgroundImage: theme.gradient,
    width: "48%",
    minHeight: "96vh",
    borderRadius: "26px",
    margin: "1%!important",
    display: "flex",
  },
}));
const SignupPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Grid container>
        {!matches && <img className={classes.grad} src={Backdrop}></img>}
        <Grid item className="signUpDiv">
          <Signup />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
