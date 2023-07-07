import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../styles/Q.css'

const Q = () => {
  return (
    <div>
      <Box
        sx={{
          marginLeft: "8vw",
          marginTop: "5vh",
          marginRight: "5vw",
          width: "85%",
          backgroundColor: "#9092DC",
          height: "7vh",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      >
        <Typography
          className="q-header"
          variant="body1"
          color="initial"
          sx={{
            paddingTop: "0.9rem",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Frontend
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "8vw",
          marginRight: "5vw",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 8px 0px",
          width: "85%",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <Typography className="questionsss" sx={{padding:"3vh",color:"#4F3A7B",fontFamily:"Poppins",fontWeight:"bold",marginLeft:"4vw",fontSize:"1.2rem"}} align="left">
            1. Criteria 1
        </Typography>
       
        <Grid container className="questions-mobile">
         
          <Grid item md={1} xs={3}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
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
          </Grid>
         
        </Grid>


        <Typography className="questionsss" sx={{padding:"3vh",color:"#4F3A7B",fontFamily:"Poppins",fontWeight:"bold",marginLeft:"4vw",fontSize:"1.2rem"}} align="left">
            1. Criteria 1
        </Typography>
       
        <Grid container className="questions-mobile">
         
          <Grid item md={1} xs={3}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
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
          </Grid>
         
        </Grid>


        
      </Box>
    </div>
  );
};

export default Q;
