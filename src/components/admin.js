//HIII this is a change

import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Interviewers from "./Interviewers";
import PanelDetails from "./PanelDetails";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Button} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function CollapsibleTable() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // const [user, setUser] = useState([
  //   {
  //     id: "0",
  //     interviewees: [
  //       {
  //         id: "0",
  //         application: {
  //           stack: [{ name: "", repo_link: "" }],
  //           resume_link: "",
  //         },
  //         user: {
  //           email: "",
  //           sapid: "",
  //           grad_year: "",
  //           name: "",
  //         },
  //       },
  //     ],
  //     interviewers: [
  //       {
  //         id: "0",
  //         role: "Fullstack",
  //         stack: 1,
  //         user: {
  //           email: "",
  //           sapid: "",
  //           grad_year: 2020,
  //           name: "",
  //         },
  //       },
  //     ],
  //     name: "Panel",
  //   },
  // ]);
  const [user,setUser]=useState([])
const token='Token '+localStorage.getItem("token")

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '//devacc3.pythonanywhere.com/accounts/panel_details/',
  headers: { 
    'Authorization': token, 
    'Cookie': 'csrftoken=C4blmkJPhh0AuFtWyLpjeYA0BvfQgeASQY6l54W7HxWWgjtTKsCumGnhiSxj998Y; sessionid=x3ims0rx6tw40sv6hp7sd6ypz9g6cqq5'
  }
};

  useEffect(() => {
    console.log(token);
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log((response.data));
        setUser(response.data)
        console.log((response.data));
      }
      catch (error) {
        console.log(error);
      }
    }
    
    makeRequest();

  }, []);

  let stackName = [];
  user.map((item) => {
    console.log(item);
    stackName.push(item.name);
    return item;
  });

  return (
      <Grid item sm={12} sx={{backgroundImage:'url("bg.png")'}}>
        <div style={{ clear: "both" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {stackName.map((item, index) => (
              <>
              {console.log(item)}
              <Tab label={item} key={index} />
              </>
            ))}
          </Tabs>
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: "none",
              padding: "5px",
              float: "right",
              margin: "10px",
            }}
            onClick={() => {
              
            }}
          >
            Schedule Interview
          </Button>
          {user
            .filter((item) => item.name === stackName[value])
            .map((item, i) => (
              <div key={i}>
                <Grid container>
                  <Grid item md={12} sx={{padding:"10px"}}>
                <Interviewers data={item} />
                </Grid>
                <hr></hr>
                <br></br>
                <Grid item md={12} sx={{border:"1px black"}}>
                <PanelDetails user={user.filter((item)=> item.name === stackName[value])} />
                </Grid>
                </Grid>
              </div>
            ))}
        </div>
      </Grid>
    
  );
}
