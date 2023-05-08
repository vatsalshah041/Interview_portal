import { Grid, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Chip from "@mui/material/Chip";
import "../styles/profile.css";
import { styled } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Profile() {
  // const SearchBox = styled(TextField)(() => ({
  //   '& fieldset': {
  //     borderRadius: '25px',
  //   },
  // }));
  const handleSubmit=(e)=>{
    e.preventDefault();

  }

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);
  myHeaders.append("Content-Type", "application/json");

  const [profile, setProfile] = useState(true);
  let sap = localStorage.getItem("sapid");

  const [user, setUser] = useState({
    email: "",
    grad_year: "",
    name: "",
    sapid: "",
    pass: "",
    // confirm_pass: "",
  });

  const [app, setApp] = useState({
    stack: [
      {
        name: "",
        repo_link: "",
      },
    ],
    resume_link: "",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  async function handleSave() {
    var raw2 = JSON.stringify({
      user: {
        name: user.name,
        sapid: user.sapid,
        grad_year: user.grad_year,
        email: user.email,
        password: user.pass,
        confirm_password: user.pass,
      },
    });
    //post after save
    var requestOptions2 = {
      method: "PUT",
      headers: myHeaders,
      body: raw2,
      redirect: "follow",
    };
    await fetch(
      "https://devacc3.pythonanywhere.com/accounts/interviewee_update/",
      requestOptions2
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    //fetching user details
    fetch(
      `https://devacc3.pythonanywhere.com//accounts/interviewee_get/${sap}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://devacc3.pythonanywhere.com//accounts/application/",
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.stack[0].name);
        setApp(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
    <div className='class1' style={{paddingBottom:"55px"}}>
      <SideNavbar>
        
          <Typography className='heading_profile' sx={{ paddingTop:"40px", fontSize:"40px", fontWeight:"bold", color: " #5154CECC",textAlign:"center",marginBottom:"35px"}}>
            Profile Page
          </Typography>

          {/* <Grid container spacing={2} my={10} sx={{ padding: "2% 30%" }}>
            <Typography fullWidth mx={3} my={0}>
            Name
            </Typography>
            <Grid item xs={12} my={0}>
             
               
              <TextField
               
                fullWidth
               
                sx={{
                  [`& fieldset`]: {
                    borderRadius: 30,
                    // boxShadow:"2px 2px 2px white inset,0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    backgroundColor:"white",
                     boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
                  },
                  
                }} 
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Grid>
          </Grid>    */}
          <Container maxWidth='sm'>
          <Grid container>
            <Grid item  ml={0} lg={3} xs={3}>
            <Typography sx={{textAlign:"left"}} >Name:</Typography>
            </Grid> 
          </Grid>
          <Grid container my={1}>
            <Grid item lg={12} xs={12} md={12}>
             
            <TextField  fullWidth
               value={user.name}
               onChange={(e) => setUser(e.target.value)}
          
            sx={{
              borderColor: "none",
              [`& fieldset`]: {
                borderRadius: 30,
                borderColor:"none",
               

                boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
              },
            
            }}
            ></TextField>
            </Grid> 
          </Grid>

          <Grid container sx={{marginTop:"20px"}}>
            <Grid item  xs={12} lg={5} md={6} >
                <Typography sx={{textAlign:"left"}}>
                  Sapid
                </Typography>
                <TextField my={1} fullWidth
                  // value={user.sapid}
                    sx={{
                      marginTop:"10px",
                      borderColor: "none",
                      [`& fieldset`]: {
                        borderRadius: 30,
                        borderColor:"none",
                        boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
                      },
                    
                    }}
                    ></TextField>

            </Grid>
            <Grid item lg={1} md={1}>

            </Grid>
            <Grid item xs={12} lg={6} md={6} >
            <Typography sx={{textAlign:"left"}}>
                  Graduation Year
                </Typography>
                <TextField fullWidth
                // value={user.sapid}
                  sx={{
                    marginTop:"10px",
                    borderColor: "none",
                    [`& fieldset`]: {
                      borderRadius: 30,
                      borderColor:"none",
                      boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
                    },
                    backgroundColor:"white",
                  
                  }}
                  ></TextField>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item  ml={0} lg={3} xs={3} my={1}>
            <Typography sx={{textAlign:"left",marginTop:"10px"}} >Email</Typography>
            </Grid> 
          </Grid>
          <Grid container >
            <Grid item lg={12} xs={12} md={12}>
             
            <TextField  fullWidth
               //value={user.sapid}
               //onChange={(e) => setUser({ ...user, name: e.target.value })}
          
            sx={{
              borderColor: "none",
              [`& fieldset`]: {
                borderRadius: 30,
                borderColor:"none",
               

                boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
              },
              backgroundColor:"white",
            
            }}
            ></TextField>
            </Grid> 
          </Grid>

          <Grid container>
          
            <Grid item xs={12} my={2}>
            <Typography sx={{textAlign:"left"}}>
                  Resume Link
                </Typography>
              <TextField
                 sx={{
                  marginTop:"10px",
                  borderColor: "none",
                  [`& fieldset`]: {
                    borderRadius: 30,
                    boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  },
                  backgroundColor:"white",
                }}
                value={app.resume_link}
                
                fullWidth
              />
            </Grid>
          </Grid>


          {!profile ? (
            <Grid my={1}>
            <Typography fullWidth sx={{textAlign:"left",marginBottom:"5px"}}>
             Password
            </Typography>
              <Grid item xs={12}>
                <TextField
                
                  value={user.pass}
                  sx={{
                    
                    borderColor: "none",
                    [`& fieldset`]: {
                      
                      borderRadius: 30,
                      boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                    },
                    backgroundColor:"white",
                  }}
                  onChange={(e) => setUser({ ...user, pass: e.target.value })}
                  // label="Password"
                  fullWidth
                
                />
              </Grid>
            </Grid>
          ) : null}

          
          {/* <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
            <Grid  item xs={6}>
               <Typography mx={3} my={0} >Sapid</Typography>
              <TextField
               
                value={user.sapid}
                sx={{
                  borderColor: "none",
                  [`& fieldset`]: {
                    borderRadius: 30,
                    borderColor:"none",
                    backgroundColor:"white",

                    boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important"
                  },
                
                }}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={6}>
            <Typography mx={3} my={0}>Grad Year</Typography>
              <TextField
                value={user.grad_year}
                sx={{
                  borderColor: "none",
                  [`& fieldset`]: {
                    borderRadius: 30,
                    backgroundColor:"white",
                    boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  },
                }}
                onChange={(e) =>
                  setUser({ ...user, grad_year: e.target.value })
                }
                fullWidth
              />
            </Grid>
          </Grid> */}

          {/* <Grid container spacing={2} sx={{ padding: "2% 30%" }}>
          <Typography fullWidth mx={3} my={0}>
              Email
            </Typography>
            <Grid item xs={12}>
              <TextField
                 sx={{
                  borderColor: "none",
                  [`& fieldset`]: {
                    borderRadius: 30,
                    backgroundColor:"white",
                    boxShadow: "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  },
                }}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                fullWidth
              />
            </Grid>
          </Grid> */}

          {/* <Grid container spacing={2} sx={{ padding: "2% 32%" }}>
            {app.stack.map((item, index) => (
              <Chip
                key={index}
                label={item.name}
                color="secondary"
                sx={{ margin: "5px" }}
                onClick={() => {}}
                onDelete={() => {}}
              />
            ))}
          </Grid> */}

          <Grid container>
            <Typography sx={{marginTop:"25px"}}>
              Stacks Applied
            </Typography>
            <Grid item xs={12} lg={12}>
            {app.stack.map((item, index) => (
              <Button
                
                sx={{border:" solid 3px white",boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#6B6EDF",color:"white",
                  "&:hover": {
                    color: 'white',
                    backgroundColor: '#6B6EDF'
                  },
                marginTop:"30px",
             
                borderRadius: 30,
                width:"110px"}}
                key={index}
                label={item.name}
                onClick={() => {}}
                onDelete={() => {}}
              ><CheckCircleOutlineIcon/>Frontend</Button>              
            ))}

            </Grid>
            
          </Grid>

          <Grid container spacing={2} sx={{  marginTop:"25px",}}>
            <Grid item xs={6}>
              <Button
                size="large"
                variant="contained"
               
                sx={{border:" solid 3px white",boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#5154CE",color:"white",
                "&:hover": {
                  color: 'white',
                  backgroundColor: '#5154CE'
                },
                borderRadius:"10px"
              }}
                // sx={{ textTransform: "none", padding: "4% 10%" }}
                onClick={() => setProfile(false)}
              >
                Edit 
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="large"
                variant="contained"

                sx={{border:" solid 3px white",boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",backgroundColor:"#5154CE",color:"white",
                "&:hover": {
                  color: 'white',
                  backgroundColor: '#5154CE'
                },
                borderRadius:"10px"
              }}
                // sx={{ textTransform: "none", padding: "4% 10%" }}
                onClick={handleSave}
              >
                Save 
              </Button>
            </Grid>
          </Grid>
        
          </Container>
          
          
       
        
      </SideNavbar>
      </div>
    </>
  );
}
