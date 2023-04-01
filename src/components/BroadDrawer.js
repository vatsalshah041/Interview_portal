import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { Toolbar } from "@material-ui/core";
function BroadDrawer() {
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{backgroundColor:"#DADBFF", height:"100vh",borderRight:" solid 5px #7B5BBC"}}>

    
      <Box className="logoBox">
      <Toolbar style={{marginTop:"20px",marginBottom:"20px"}}>
        <svg width="80" height="50" viewBox="0 0 88 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.8679 3.55166C15.8388 10.9604 23.4391 19.4122 28.8679 22.7121L25.6745 29.4182L36.2127 24.3088C40.0448 25.2668 45.1543 23.3508 47.3896 22.3928C59.3968 13.7067 51.6475 6.31927 46.4316 3.55166C38.512 0.741458 31.4226 2.38074 28.8679 3.55166Z" fill="url(#paint0_linear_15_1306)" stroke="url(#paint1_linear_15_1306)" stroke-width="3"/>
        <path d="M46.4314 66.1423H85.0716L80.6008 76.9999H15.4553" stroke="url(#paint2_linear_15_1306)" stroke-width="3"/>
        <path d="M49.3054 61.6719V54.6464C49.6248 53.0497 51.1576 49.8563 54.7342 49.8563C58.6727 49.3241 65.3363 46.6629 60.4823 40.2761C58.5663 37.0827 55.8838 29.0353 60.4823 22.393C62.8242 20.3705 68.7213 17.539 73.5753 22.393C75.5978 24.7349 78.4293 31.59 73.5753 40.2761C72.0851 41.8728 69.9987 45.7049 73.5753 48.2596C77.0881 48.3661 84.2413 49.9202 84.7522 55.2851V61.3526" stroke="url(#paint3_linear_15_1306)" stroke-width="3"/>
        <path d="M3.3205 77V52.4108C3.42695 51.2399 4.21465 48.3233 6.51391 46.024C7.04614 45.2789 7.79127 43.4054 6.51391 41.8726C3.10761 37.934 -1.66121 28.0132 6.51391 19.8381C9.60088 17.922 16.669 16.1976 20.2456 24.6282C21.6294 28.9925 22.6088 38.6792 15.4555 42.5112C14.9233 43.1499 14.1781 44.7467 15.4555 46.024C17.478 48.6852 21.9062 56.179 23.439 64.8651H39.0867C41.1092 65.8231 44.26 68.4417 39.406 72.5293H21.523C20.3521 72.6357 18.6489 72.5293 18.0102 70.2939L12.2621 58.7976" stroke="url(#paint4_linear_15_1306)" stroke-width="3"/>
        <defs>
        <linearGradient id="paint0_linear_15_1306" x1="23.0101" y1="0.655968" x2="44.55" y2="29.3529" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5154CE"/>
        <stop offset="1" stopColor="#7B5BBC"/>
        </linearGradient>
        <linearGradient id="paint1_linear_15_1306" x1="23.0101" y1="0.655968" x2="44.55" y2="29.3529" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5154CE"/>
        <stop offset="1" stopColor="#7B5BBC"/>
        </linearGradient>
        <linearGradient id="paint2_linear_15_1306" x1="18.356" y1="65.6101" x2="20.744" y2="83.0494" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5154CE"/>
        <stop offset="1" stopColor="#7B5BBC"/>
        </linearGradient>
        <linearGradient id="paint3_linear_15_1306" x1="50.7824" y1="17.6561" x2="85.0858" y2="50.6628" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5154CE"/>
        <stop offset="1" stopColor="#7B5BBC"/>
        </linearGradient>
        <linearGradient id="paint4_linear_15_1306" x1="3.6656" y1="15.3842" x2="50.2035" y2="51.458" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5154CE"/>
        <stop offset="1" stopColor="#7B5BBC"/>
        </linearGradient>
        </defs>
        </svg>
        <Typography sx={{fontFamily: "Monospace",
            fontSize: "19px",
            color:"#7B5BBC",
            fontWeight: "40",
            letterSpacing: "0em"}}> Interview Portal</Typography>
      </Toolbar>
      </Box>
      <Divider />
      <Paper elevation={3} sx={{width:"200px",ml:"20px",height:"55px",mt:"20px",mb:"20px",backgroundColor:"#DADBFF",boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"5%"}}>
        <List>
        <ListItem button onClick={() => navigate("/profile")}>
          <ListItemIcon>
          <PersonIcon sx={{color:"#7B5BBC"}} />
          </ListItemIcon>
          <ListItemText primary="Profile"/>
        </ListItem>
      </List>
      </Paper>

      <Paper elevation={3} sx={{width:"200px",ml:"20px",height:"55px",mb:"20px",backgroundColor:"#DADBFF",boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"5%"}}>
      <List>
        <ListItem button onClick={() => navigate("/faq")}>
          <ListItemIcon>
          <QuizIcon sx={{color:"#7B5BBC"}}/> 
          </ListItemIcon>
          <ListItemText
            sx={{ color: "#000", textDecoration: "none!important" }}
            primary="FAQs"
          />
        </ListItem>
      </List>
      </Paper>

      <Paper elevation={3} sx={{width:"200px",ml:"20px",height:"55px",mb:"20px",backgroundColor:"#DADBFF",boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"5%"}}>
      <List>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
          <GroupsIcon sx={{color:"#7B5BBC"}}/> 
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
      </Paper>

      <Paper elevation={3} sx={{width:"200px",ml:"20px",height:"55px",mb:"20px",backgroundColor:"#DADBFF",boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"5%"}}>
      <List>
        <ListItem button onClick={() => navigate("/login")}>
          <ListItemIcon>
          <LogoutIcon sx={{color:"#7B5BBC"}}/> 
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      </Paper>

      <Paper elevation={3} sx={{width:"200px",ml:"20px",height:"55px",mb:"20px",backgroundColor:"#DADBFF",boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"5%"}}>
      <List>
        <ListItem button onClick={() => navigate("/resources")}>
          <ListItemIcon>
            <TaskIcon sx={{color:"#7B5BBC"}} />
          </ListItemIcon>
          <ListItemText primary="Resources"/>
        </ListItem>
      </List>
      </Paper>
      <Divider/>

      </Box>
    </>
  );
}

export default BroadDrawer;