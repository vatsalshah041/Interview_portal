import { Card, Divider, Grid, Typography,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
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
      height: "21vh",
      width:"20vw",
    },
  },
  dividerColor: {
    marginTop:0,
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

const ApplyCard = () => {
  const [allow,setAllow]=useState();
  const classes = useStyles();
  const navigate=useNavigate();

  useEffect(() => {

    const axios = require('axios');
    let sap=localStorage.getItem("sapid")
    let t="Token "+localStorage.getItem("token")
    let u="//devacc3.pythonanywhere.com/accounts/appl_num/"+sap;

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: u,
  headers: { 
    'Authorization': 'Token b186ff38c64049f0cf0b3d4b57efdd63d33e3392', 
    'Cookie': t
  }
};

async function makeRequest() {
  try {
    const response = await axios.request(config);
    //console.log((response.data));
    if(((response.data).Number)>=1)
    {
      setAllow(true);
    }
    else{
      setAllow(false)
    }
  }
  catch (error) {
    console.log(error);
  }
}

makeRequest();


  }, [])
  

  return (
    <>
    {(allow || !allow)?<>
    
      <Card className={classes.card1}>
      <Grid container item className={classes.flexItem} rowSpacing="8">
        <Grid item>
        <Typography sx={{textAlign:"left",fontSize:"1.3em",paddingLeft:"1vw",paddingTop:"2.1vh"}}>
            <strong>Apply for Interview</strong> 
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.dividerColor} variant="middle" />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} >
            <Button onClick={()=>{navigate('/applicationform')}} sx={{borderRadius:"10px",border:" solid 3px white",boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#5154CE",color:"white",
                marginTop:"1.3rem",
                "&:hover": {
                    color: 'white',
                    backgroundColor: '#CBC3E3'
                  },
                  width:"110px",justifyContent:"center"}}
                  disabled={allow}

                  >Apply</Button>
          </Typography>
        </Grid>
      </Grid>
    </Card>
    </>:<></>}
    
    </>
  );
};

export default ApplyCard;