import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import TaskData from "./TaskData";

const useStyles = makeStyles((theme) => ({
  flexItem: {
    fontColor:"#4F3A7B !important",
    display: "flex",
   alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    marginLeft:"1.8rem",
    marginRight:"4vw",
    height:"32vh",
    borderRadius: "10px!important",
  },
  divider: {
    width: "100%",
  },
  header: {
    paddingLeft:"1.15rem",
    color:"#4F3A7B",
    fontFamily:"Poppins",
    display: "flex",
    //   justifyContent: "flex-start",
  },
  text: {
    fontColor:"#4F3A7B ",
    fontSize: "14px!important",
  },
  scrollButtons: {
    "&.Mui-disabled": {
      opacity: 0.3,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <>
   
    <Typography className={classes.header} variant="h3" sx={{paddingBottom:"0.5rem",paddingLeft:"2.2rem"}}>
    <strong>Tasks</strong>
    </Typography>
    <Card className={classes.card1}>        
          <AppBar position="static" color="inherit" sx={{ width: "100vw",borderRadius:"6px !important"}}>
            <Tabs
              sx={{width:"100vw"}}
              variant="scrollable"
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              classes={classes}
              aria-label="simple tabs example"
            >
              <Tab label="Frontend" {...a11yProps(0)} />
              <Tab label="Django" {...a11yProps(1)} />
              <Tab label="Node" {...a11yProps(2)} />
              <Tab label="Flutter" {...a11yProps(3)} />
              <Tab label="React Native" {...a11yProps(4)} />
              <Tab label="Design" {...a11yProps(5)} />
            </Tabs>
          </AppBar>
        <Grid sx={{ padding: { xs: 2, md: 0 } }}>
          <TabPanel value={value} index={0}>
            <TaskData stack={1}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TaskData stack={3}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TaskData stack={5}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <TaskData stack={2}/>
          </TabPanel>
          <TabPanel value={value} index={4}>
          <TaskData stack={7}/>
          </TabPanel>
        </Grid>
    </Card>
    </>
  );
}
