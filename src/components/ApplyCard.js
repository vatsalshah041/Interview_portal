import { Card, Divider, Grid, Typography,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    padding: "6%",
    marginTop:"3px",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  [theme.breakpoints.up("md")]: {
    card1: {
      height: "25vh",
      width:"18vw"
    },
  },
  divider: {
    width: "100%",
  },
  header: {
    alignItems:"left",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: "14px!important",
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
      <Grid container item className={classes.flexItem} rowSpacing="20">
        <Grid item>
          <Typography sx={{textAlign:"left",ml:0,fontSize:"1.5em"}}>
            <strong>Apply for Interview</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            <Button onClick={()=>{navigate('/applicationform')}} sx={{borderRadius:"6px",border:" solid 3px white",boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#5154CE",color:"white",
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