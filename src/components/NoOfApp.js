import { Card, Divider, Grid, Typography,Button} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    justifyContent: "left",
    alignItems: "left",
   
  },
  card1: {
    padding: "10%",
    marginTop:"3px",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    
  },
  [theme.breakpoints.up("md")]: {
    card1: {
      marginLeft:"-1vw !important",
      marginTop:"1.3vw !important",
      paddingTop:"1vh !important",
      paddingBottom:"3vh !important",
      width:"18vw",
      borderRadius: "",
      borderColor:"red",
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

const NoOfApp = () => {
  const classes = useStyles();
  const navigate=useNavigate();
  return (
    <Card className={classes.card1}>
      <Grid container item className={classes.flexItem} rowSpacing="20">
        <Grid item>
          <Typography sx={{textAlign:"left",ml:0,fontSize:"1.3em"}}>
            <strong>No. of Applicants</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            <Grid  sx={{ display: "flex", mb: 3 }}>
              <Grid item lg={6} xs={6} >
                Frontend
                <Divider orientation="horizontal" mt={2}/>
              </Grid>
              <Divider orientation="vertical" flexItem></Divider>
              <Grid item lg={6} xs={6}>
                {" "}
                Design
                <Divider orientation="horizontal" />
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", mb: 3 }}>
              <Grid item lg={6} xs={6}>
                Backend
              </Grid>
              <Divider orientation="vertical" flexItem></Divider>
              <Grid item lg={6} xs={6}>
                {" "}
                App Dev
              </Grid>
            </Grid>
          </Typography>
        </Grid>

      </Grid>
    </Card>
  );
};

export default NoOfApp;