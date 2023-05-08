import React from "react";
import { Timeline, Events, TextEvent} from "@merc/react-timeline";
import  { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

import { Card, Grid, Typography, Divider } from "@mui/material";
import { themes, createTheme } from "@merc/react-timeline";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card2: {
    padding: "3%",
    height: "65vh",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
}));

const customTheme = createTheme(themes.default, {
  card: {
    
  },
  date: {

    backgroundColor: "#DADBFF",
    // borderRadius:"50%",

  },
  marker: {
    // borderColor: "white",
  },
  timelineTrack: {
    backgroundColor: "#5154CE",
  },
});

const TimeLine = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];
  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
   
  ];
  return (
    <Card className={classes.card2} sx={{ height: "fit-content" }}>
      <Grid container sx={{ height: "fit-content" }}>
        <Grid item className={classes.header} sx={{ height: "fit-content" }}>
          <Typography gutterBottom variant="h3" component="div" mt={1} mb={1}>
            <strong>Timeline </strong>
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Grid xs={12} md={12} sx={{ minHeight: "40vh" }}>
          <Timeline theme={customTheme}>
            <Events>
              <TextEvent date="02 May" text="Tasks will be assigned" />
              {/* <TextEvent date="18 May" text="Application Form will be live" />
              <TextEvent date="28 May" text="Last Day for registration" /> */}
              <TextEvent date="05 June" text="Interview Round" />
              <TextEvent date="14 June" text="Results" />
            </Events>
          </Timeline>
          {/* <div style={{ width: "100%",
                    height: "200px", 
                    marginTop: "70px" }}>
          <HorizontalTimeline
          styles={{ outline: "#DFA867", foreground: "#19295C" }}
          index={value}
          indexClick={(index) => {
            setValue(index);
            setPrevious(value);
          }}
          values={VALUES}
        />
        </div>
        <div className="text-center">{description[value]}</div> */}

        </Grid> 
       </Grid>
    </Card>
  );
};
export default TimeLine;
