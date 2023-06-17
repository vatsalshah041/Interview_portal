import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    paddingTop:"1vh",
    paddingLeft:"2vh",
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
      height: "35vh",
    },
  },
  divider: {
    width: "100%",
  },
  header: {
    alignItems:"left",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: "14px!important",
  },
}));

const InterviewScheduleCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <Grid container item className={classes.flexItem} rowSpacing="20">
        <Grid item>
          <Typography sx={{textAlign:"left",ml:0,fontSize:"1.3em"}}>
            <strong>Interview</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
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
