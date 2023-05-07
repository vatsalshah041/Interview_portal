import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Loader from './Loader';



export default function Scorecard() {
  const [user, setUser] = useState();
  const s = localStorage.getItem("sapmod")
  const token = localStorage.getItem("token")
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    const axios = require('axios');
    let t = "Token " + token;
    let urll = 'https://devacc3.pythonanywhere.com/accounts/view_candidate/' + s;
    console.log(t, urll);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: urll,
      headers: {
        'Authorization': t,
        'Cookie': 'csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk; sessionid=zmqzegi0wuqvlef56i3uipyhtbim3gv8'
      }
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        //console.log(response.data);
        setUser(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest();


  }, [])
  return (
    <>
      {user ? <>

        <Grid container >
          <Grid item md={12} sx={{ padding: "10px", backgroundColor: "#7290df", marginTop: "5vw", marginLeft: "5vw", marginRight: "5vw", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
            <Typography variant="h4">{user.interviewee.user.name}</Typography>
          </Grid>
          <Grid item md={12} sx={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Grid container>
              <Grid item md={6}>Sapid:{user.interviewee.user.sapid}</Grid>
              <Grid item md={6}>Graduation Year:{user.interviewee.user.sapid}</Grid>
              <Grid item md={6}>Email Id:{user.interviewee.user.email}</Grid>
              <Grid item md={6}></Grid>
              <Grid item md={12}>Resume Link: <div style={{ color: 'blue' }}>{user.interviewee.application.resume_link}</div></Grid>
              <Grid item md={12}>Github Link:{(user.interviewee.application.stack).map((k, i) => {
                console.log(i+1);
                return (
                  <>
                    <Chip
                      label={k.name}
                      component="a"
                      href={k.repo_link}
                      variant="outlined"
                      clickable
                      sx={{ backgroundColor: "#7290df", color: "white", margin: "5px" }}

                    />
                  </>
                )
              })}</Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid container>
          <Box sx={{ width: '100%', typography: 'body1', marginLeft: "5vw", marginRight: "5vw" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {(user.interviewee.application.stack).map((k, i) => {
                    console.log(k.name);
                    return (
                      <>
                        <Tab label={k.name} value={i+1} />
                      </>
                    )
                  })}
                </TabList>
              </Box>
              {(user.interviewee.application.stack).map((k, i) => {

                return (
                  <>
                    <TabPanel value={i+1}>{k.repo_link}</TabPanel>
                  </>
                )
              })}


              {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
            </TabContext>
          </Box>
        </Grid>
      </> : <><Loader></Loader></>}
    </>


  )
}
