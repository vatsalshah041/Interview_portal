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

const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "30px!important",
      marginBottom: "2vh",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        columnSpacing={1}
        id="cover-dashboard-div"
        className={classes.flexItem}
        sx={{ paddingTop: "7vh", marginLeft: "1.5vw !important" }}
      >
        <Grid item spacing={3} xs={12} md={3} lg={3}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <ProfileProgress />
          </Grid>
          <Grid
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
          xs={12}
          md={3}
          lg={4}
          sx={{
            marginBottom: "2vh !important",
            borderRadius: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px 0px",
            backgroundColor: "white",
          }}
        >
          <Typography
            gutterBottom
            sx={{ fontSize: "1.35em", textAlign: "left" }}
            component="div"
            mt={1}
            mb={1}
          >
            <strong>Timeline</strong>
          </Typography>
          <Divider orientation="horizontal" />
          <img src={timeline} className="timeline-img" />
        </Grid>
        <Grid item spacing={3} xs={12} md={3} lg={3}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <ApplyCard />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ marginBottom: "2vh !important" }}
          >
            <NoOfApp />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12} md={12} sx={{ margin: "2vh !important" }}>
          <TabPanel />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
