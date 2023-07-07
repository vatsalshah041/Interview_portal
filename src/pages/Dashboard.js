import React from "react";
import ProfileProgress from "../components/ProfileProgress";
import InterviewScheduleCard from "../components/InterviewScheduleCard";
import ApplyCard from "../components/ApplyCard";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import TabPanel from "../components/TasksSection";
import NoOfApp from "../components/NoOfApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apply from "../components/Apply";
import "../styles/DashboardComponents.css";
import { Card, Divider, Typography, Button } from "@mui/material";
import timeline from "../images/timeline.png";
import hey from "../images/image4.png";

const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30px!important",
      marginBottom: "2vh",
    },
    dividerColor: {
      marginTop:0,
      backgroundColor: 'gray',
    },
  },
  dividerColor: {
    marginTop:0,
    backgroundColor: 'gray',
  },

}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
    <div id="cover-dashboard-div">
      <Grid
        container
        
        columnSpacing={1}
       
        className={classes.flexItem}
        sx={{ paddingTop: "7vh", marginLeft: "1.5vw !important" }}
      >
        <Grid item spacing={3} xs={12} md={4} lg={3}>
          <Grid
            className="mobile-res"
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <ProfileProgress />
          </Grid>
          <Grid
            className="mobile-res"
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <InterviewScheduleCard />
          </Grid>
        </Grid>
        <Grid
          item
          spacing={1}
          className="mobile-res"
          xs={12}
          md={4}
          lg={4}
          sx={{
            
            //marginRight:"6vw !important",
            borderRadius:"10px",
            marginBottom: "2vh !important",
            borderRadius: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px 0px",
            backgroundColor: "white",
          }}
        >
          <Typography sx={{textAlign:"left",fontSize:"1.3em",paddingLeft:"1vw",paddingTop:"2.1vh",paddingBottom:"1vh"}}>
            <strong>Timeline</strong> 
          </Typography>
          <Divider className={classes.dividerColor} variant="middle" />
          <img src={timeline} className="timeline-img" />
        </Grid>
        <Grid item spacing={3} xs={12} md={4} lg={3}>
          <Grid
            className="mobile-res-apply"
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important"}}
          >
            <ApplyCard />
          </Grid>
          <Grid
            className="mobile-res-noofapp"
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <NoOfApp />
          </Grid>
        </Grid>
        <Grid className="mobile-res-tasks" item xs={12} lg={12} md={12} sx={{ margin: "2vw !important" }} >
          <TabPanel />
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Dashboard;
