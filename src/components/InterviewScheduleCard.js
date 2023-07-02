import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    paddingTop:"1vh",
    
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    // alignItems: "center",
    // justifyContent: "space-around",
  },
  card1: {
    paddingBottom: "73%",
    marginTop:"3px",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  [theme.breakpoints.up("md")]: {
    card1: {
      width:"22vw",
      height: "37vh",
    },
  },
  dividerColor: {
    marginTop:0,
    backgroundColor: 'gray',
  },
  header: {
    alignItems:"left",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    paddingTop:"0.3vh",
    paddingLeft:"0.2vw",
    fontSize: "16px!important",
  },
}));

const InterviewScheduleCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <Grid container item className={classes.flexItem} rowSpacing="8">
        <Grid item>
          <Typography sx={{textAlign:"left",fontSize:"1.3em",paddingLeft:"1vw",paddingTop:"2.1vh"}}>
            <strong>Interview</strong> 
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
            <Divider className={classes.dividerColor} variant="middle" />
           </Grid>
        
        <Grid item xs={12}>
          <Typography className={classes.text}>
            Not yet scheduled will notify you when it is scheduled
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InterviewScheduleCard;
