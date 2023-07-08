import { Card, Divider, Grid, Typography,Button} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import '../styles/NoofApp.css'
const useStyles = makeStyles((theme) => ({
  flexItem: {
    justifyContent: "left",
    alignItems: "left",
   
  },
  card1: {
    padding: "1%",
    marginTop:"3px",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    
  },
  [theme.breakpoints.up("md")]: {
    card1: {
      marginLeft:"-2vw !important",
      marginTop:"1.3vw !important",
      paddingTop:"1vh !important",
      paddingBottom:"5vh !important",
      width:"20vw",
      borderRadius: "",
      borderColor:"red",
    },
  },
  dividerColor: {
    marginBottom:"0.5rem",
    backgroundColor: 'gray',
  },
  header: {
    alignItems:"left",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: "16px!important",
  },
}));

const NoOfApp = () => {
  const classes = useStyles();
  const navigate=useNavigate();
  return (
    <Card className={classes.card1} id="mobile-res-noofappp">
      <Grid container item className={classes.flexItem} rowSpacing="7">
        <Grid item>
        <Typography sx={{textAlign:"left",fontSize:"1.3em",paddingLeft:"1vw",paddingTop:"2.1vh"}}>
            <strong>Number of Applicants</strong> 
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{marginTop:"1vh"}}>
        <Divider className={classes.dividerColor} variant="middle" />
        </Grid>
        <Grid item xs={12} sx={{marginTop:"1vh"}}>
          <Typography className={classes.text}>
            <Grid  sx={{ display: "flex"}}>
              <Grid item lg={6} xs={6}  >
                <Typography sx={{paddingBottom:"1.2rem"}} >Frontend  <span style={{paddingLeft:"1rem",fontSize:"16px",color:"gray"}}> 0</span></Typography>
                <Grid item xs={12} lg={12}>
                <Divider orientation="horizontal"  className={classes.dividerColor} sx={{marginLeft:"1rem"}} />
                </Grid>
               
              </Grid>
              <Divider orientation="vertical" flexItem className={classes.dividerColor} ></Divider>
              <Grid item lg={6} xs={6}>
               
                <Typography sx={{paddingBottom:"1.2rem"}} >Design  <span style={{paddingLeft:"1rem",fontSize:"16px",color:"gray"}}> 0</span></Typography>

                <Grid item xs={12} lg={12}>
                <Divider orientation="horizontal"  className={classes.dividerColor}  sx={{marginRight:"1rem"}}  />
                </Grid>
              </Grid>
            </Grid>
            <Grid  sx={{ display: "flex"}}>
              <Grid item lg={6} xs={6}  >
                <Typography sx={{paddingTop:"1.2rem"}} >Backend  <span style={{paddingLeft:"1rem",fontSize:"16px",color:"gray"}}> 0</span></Typography>
                <Grid item xs={12} lg={12}>
               
                </Grid>
               
              </Grid>
              <Divider orientation="vertical" flexItem className={classes.dividerColor} ></Divider>
              <Grid item lg={6} xs={6}>
               
                <Typography sx={{paddingTop:"1.2rem"}} >App Dev  <span style={{paddingLeft:"1rem",fontSize:"16px",color:"gray"}}> 0</span></Typography>

                <Grid item xs={12} lg={12}>
              
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid sx={{ display: "flex"}}>
              <Grid item lg={6} xs={6}>
                Backend
              </Grid>
              <Divider orientation="vertical" flexItem className={classes.dividerColor}></Divider>
              <Grid item lg={6} xs={6}>
              
                App Dev
              </Grid>
            </Grid> */}
          </Typography>
        </Grid>

      </Grid>
    </Card>
  );
};

export default NoOfApp;