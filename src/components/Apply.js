import React from 'react'
import {Box,Typography,TextField,Grid,Checkbox,Button} from "@mui/material";
import '../styles/application.css'
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link } from 'react-router-dom';

function Apply() {
  return (
    <div className="cover_div">
      <Box sx={{paddingBottom:"9vh",paddingTop:"9vh"}}>
      <Box id="box_apply" sx={{justfiyContent:"center",alignItems:"center",marginLeft:"45vh",marginRight:"45vh",borderRadius:"8.3px",backgroundColor:"white !important",paddingBottom:"1vh"}}>

              <Typography sx={{fontWeight:"bold", paddingTop:"4vh",color:"#5154CE",fontSize:"2rem"}}>
                Application Form
              </Typography>
              <Grid container mt={3} sx={{paddingLeft:"10vw",paddingRight:"10vw"}}>
                <Grid item xs={2} lg={4} md={4} >
                      <DescriptionIcon sx={{fontSize:"2.9rem",paddingTop:"1rem",color:"#5154CE"}}/>
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",fontSize:"1.2rem"}}>
                      Resume Link
                </Typography>
                <TextField
                    sx={{marginTop:"0vh",paddingTop:"0vh"}}
                    className="input"
                    id="input-with-icon-textfield"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    autoComplete="off"
                    name="firstname"
                    margin="normal"
                    type={"text"}
                    variant="standard"
                   
                  />  
                </Grid>
                <Grid item xs={2} lg={4} md={4} >
                      <GitHubIcon sx={{fontSize:"2.9rem",paddingTop:"1rem",color:"#5154CE"}}/>
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",paddingTop:"1rem",fontSize:"1.2rem"}}>
                     GitHub Repo Link
                </Typography>
                </Grid>
                <Grid item xs={2} lg={4} md={4} sx={{paddingTop:"3rem"}}>
                <Checkbox />
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",paddingTop:"1rem",fontSize:"1rem"}}>
                     Frontend
                </Typography>
                <TextField
                    sx={{marginTop:"0vh",paddingTop:"0vh"}}
                    className="input"
                    id="input-with-icon-textfield"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    autoComplete="off"
                    name="firstname"
                    margin="normal"
                    type={"text"}
                    variant="standard"
                   
                  />  
                </Grid>
                <Grid item xs={2} lg={4} md={4} sx={{paddingTop:"2rem"}}>
                <Checkbox />
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",fontSize:"1rem"}}>
                     Node
                </Typography>
                <TextField
                    sx={{marginTop:"0vh",paddingTop:"0vh"}}
                    className="input"
                    id="input-with-icon-textfield"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    autoComplete="off"
                    name="firstname"
                    margin="normal"
                    type={"text"}
                    variant="standard"
                   
                  />  
                </Grid>
                <Grid item xs={2} lg={4} md={4} sx={{paddingTop:"2rem"}}>
                <Checkbox />
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",fontSize:"1rem"}}>
                     Django
                </Typography>
                <TextField
                    sx={{marginTop:"0vh",paddingTop:"0vh"}}
                    className="input"
                    id="input-with-icon-textfield"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    autoComplete="off"
                    name="firstname"
                    margin="normal"
                    type={"text"}
                    variant="standard"
                   
                  />  
                </Grid>
                <Grid item xs={2} lg={4} md={4} sx={{paddingTop:"2rem"}}>
                <Checkbox />
                </Grid>
                <Grid item xs={10} lg={8} md={8}>
                <Typography align="left" sx={{paddingLeft:"2.7rem",fontSize:"1rem"}}>
                     App
                </Typography>
                <TextField
                    sx={{marginTop:"0vh",paddingTop:"0vh"}}
                    className="input"
                    id="input-with-icon-textfield"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    autoComplete="off"
                    name="firstname"
                    margin="normal"
                    type={"text"}
                    variant="standard"
                   
                  />  
                </Grid>
              </Grid>
              <div>
              <Button  sx={{borderRadius:"6px",border:" solid 3px white",marginTop:"3vh",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"#5154CE",color:"white",
                "&:hover": {
                    color: 'white',
                    backgroundColor: '#CBC3E3'
                  },

                 justifyContent:"center"}}>Confirm Details</Button>
              <Link to='/dashboard'>
              <Typography align="right" sx={{marginRight:"2vw"}} > Skip for now {'>'}</Typography>
              </Link>
              </div>
             
        </Box>

      </Box>
       
        
    </div>
  )
}

export default Apply