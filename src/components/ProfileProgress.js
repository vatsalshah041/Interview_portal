import React from "react";
import ProgressCircle from "../components/ProgressCircle";
import { Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import '../styles/profileprogress.css'
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
   // justifyContent: "space-around",
  },

  text1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: " #4F4F4F",
    fontSize: "8px!important",
  },
  [theme.breakpoints.down("sm")]: {
    entireGrid: {
     // marginLeft: "-10px!important",
    },
    card1:{
      //width:"80vw",
    }
  },

  card1: {

    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
    paddingTop: "6%",
    paddingLeft: "6%",
    paddingRight: "12%",
    paddingBottom: "6%",
    maxWidth:"40rem",
    width:"21rem",
  },
}));
const ProfileProgress = (props) => {
  console.log(props.value);
  const classes = useStyles();
  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.card1} id="profile-progress-mobile" >
      <Grid container className={classes.entireGrid} spacing={2} xs={12} >
        <Grid item xs={2} lg={2} className={classes.flexItem}>
          <ProgressCircle />
        </Grid>
        <Grid item xs={10} lg={10}>
          <Typography sx={{paddingTop:"0.5rem", fontSize: "16px!important"}}>
            Your profile is still 20% incomplete.
          </Typography>
        </Grid>
      </Grid>
    </Card>

    </Grid>
    
  );
};

export default ProfileProgress;
