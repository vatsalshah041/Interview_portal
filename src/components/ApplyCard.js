import { Card, Divider, Grid, Typography,Button} from "@mui/material";
import React from "react";
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
  const classes = useStyles();
  const navigate=useNavigate();
  return (
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
                  width:"110px",justifyContent:"center"}}>Apply</Button>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ApplyCard;