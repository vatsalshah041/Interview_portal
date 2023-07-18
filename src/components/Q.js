import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import '../styles/Q.css'

const Q = (props) => {
  // console.log(props.stname);
  // console.log('devacc3.pythonanywhere.com/accounts/question/'+props.stname);
  const postscore = (e) => {
    console.log(e.target.value);
  }


  const [ques,setQues]=useState();
  useEffect(() => {
let token = localStorage.getItem("token");
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: '//devacc3.pythonanywhere.com/accounts/question/'+props.stname,
  headers: { 
    'Authorization': 'Token '+token, 
    'Cookie': 'csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk'
  }
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log((response.data));
    setQues(response.data);
  }
  catch (error) {
    console.log(error);
  }
}

makeRequest();

  }, [])
  
  return (
    <div>
      <Box
        sx={{
          marginLeft: "2vw",
          marginTop: "5vh",
          marginRight: "5vw",
          width: "85%",
          backgroundColor: "#9092DC",
          height: "7vh",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      >
      </Box>
      <Box
        sx={{
          marginLeft: "2vw",
          marginRight: "5vw",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px 0px",
          width: "85%",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        {ques?.map((item,k) => {
          return(
            <>
                <Typography className="questionsss" sx={{padding:"3vh",color:"#4F3A7B",fontFamily:"Poppins",fontWeight:"bold",marginLeft:"4vw",fontSize:"1.2rem"}} align="left">
            {k+1}. {item.name}
        </Typography>
       
        <Grid container className="questions-mobile" >
        <FormControl sx={{width:"70vw",marginLeft:"1vw!important"}}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
         <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="1" control={<Radio />} label="1" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="2" control={<Radio />} label="2" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="3" control={<Radio />} label="3" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="4" control={<Radio />} label="4" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="5" control={<Radio />} label="5" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="6" control={<Radio />} label="6" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="7" control={<Radio />} label="7" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="8" control={<Radio />} label="8" />
        </Grid>
        <Grid item md={1} xs={3} sx={{marginRight:"1vw"}}>
        <FormControlLabel value="9" control={<Radio />} label="9" />
        </Grid>
        <Grid item md={1} xs={3}>
        <FormControlLabel value="10" control={<Radio />} label="10" />
        </Grid>

        {/* <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
        <FormControlLabel value="6" control={<Radio />} label="6" />
        <FormControlLabel value="7" control={<Radio />} label="7" />
        <FormControlLabel value="8" control={<Radio />} label="8" />
        <FormControlLabel value="9" control={<Radio />} label="9" />
        <FormControlLabel value="10" control={<Radio />} label="10" /> */}
        
      </RadioGroup>
    </FormControl>
          {/* <Grid item md={1} xs={3}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
            >
                <FormControlLabel value="1" control={<Radio />} label="1"/>

               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="2" control={<Radio />} label="2" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="3" control={<Radio />} label="3" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="4" control={<Radio />} label="4" />
               
            </RadioGroup></Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="5" control={<Radio />} label="5" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="6" control={<Radio />} label="6" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="7" control={<Radio />} label="7" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="8" control={<Radio />} label="8" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="9" control={<Radio />} label="9" />
               
            </RadioGroup>
          </Grid>
          <Grid item md={1} xs={3}>
          <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
            >
                <FormControlLabel value="10" control={<Radio />} label="10" />
               
            </RadioGroup>
          </Grid> */}
        
        </Grid>
            </>
          )
        })}
        


        


        
      </Box>
    </div>
  );
};

export default Q;
