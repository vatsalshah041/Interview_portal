import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import '../styles/interviewer.css'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Interviewers(props) {

  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container>
      <Grid item sm={12} sx={{margin:'15px',backgroundColor:'#5154ce80',padding:'10px',borderRadius:'20px'}}>
        <Grid style={{ margin: "10px" }}>
          <h3 style={{ textAlign: "left" ,color:'white'}}>Mentors: </h3>
        </Grid>
        <Grid style={{ margin: "10px" }}>
        <Stack direction="row" spacing={2}>
          {props.data.interviewers
            .filter((data) => (data.role === "TE" || data.role==="BE"))
            .map((interviewer, i) => (
              
              <>
              {/* {console.log(interviewer)} */}
              <Item sx={{backgroundImage:'url("photo.jpg")'}}>
                <img src="photo.jpg"></img>
              <div className="class1">
              <b>{interviewer.role}</b>
              <br></br>
              <span>{interviewer.user.name}</span>

              </div>

              </Item>
              
              </>
              // <div key={i} style={{ margin: "10px" }}>
              //   <Avatar
              //     {...stringAvatar(interviewer.user.name)}
              //     style={{ margin: "10px" }}
              //   />
              //   {interviewer.user.name}
              // </div>
            ))}
        </Stack>
        </Grid>
      </Grid>
      
    </Grid>
  );
}
