import React from 'react'
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Chip from "@mui/material/Chip";
import "../styles/profile.css";
import { styled } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Loader from "../components/Loader";

const Profilepage = () => {
  return (
    <div>
        <div className="class1" style={{ paddingBottom: "55px" }}>
            <SideNavbar>
              <Typography
                className="heading_profile"
                sx={{
                  paddingTop: "40px",
                  fontSize: "5rem",
                  fontWeight: "bold",
                  color: " #5154CECC",
                  textAlign: "center",
                  marginBottom: "35px",
                }}
              >
                Profile Page
              </Typography>

              <Container maxWidth="sm">
                <Grid container>
                  <Grid item ml={0} lg={3} xs={3}>
                    <Typography sx={{ textAlign: "left",paddingLeft:"1rem",fontSize:"17px" }}>Name</Typography>
                  </Grid>
                </Grid>
                <Grid container my={1}>
                  <Grid item lg={12} xs={12} md={12}>
                    <TextField

                    placeholder="firstname lastname"
                    fullWidth
                    sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem",paddingLeft:"1rem" }}
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

                <Grid container sx={{ marginTop: "20px" }}>
                  <Grid item xs={12} lg={5} md={6}>
                    <Typography sx={{ textAlign: "left",paddingLeft:"1rem",fontSize:"17px" }}>Sapid</Typography>
                    <TextField
                    placeholder="6000xxxxxxx"
                    fullWidth
                    sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem" ,paddingLeft:"1rem"}}
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
                    {/* <TextField
                      my={1}
                      fullWidth
                      disabled
                      // InputProps={{ disabled: edit }}
                    //   value={user.user.sapid}
                   
                      sx={{
                        marginTop: "10px",
                        borderColor: "none",
                        [`& fieldset`]: {
                          borderRadius: 30,
                          borderColor: "none",
                          boxShadow:
                            "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important",
                        },
                      }}
                    ></TextField> */}
                  </Grid>
                  <Grid item lg={1} md={1}></Grid>
                  <Grid item xs={12} lg={6} md={6}>
                    <Typography sx={{ textAlign: "left" ,paddingLeft:"1rem",fontSize:"17px"}}>
                      Graduation Year
                    </Typography>
                    <TextField
                    fullWidth
                    placeholder="2025"
                    sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem",paddingLeft:"1rem" }}
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
                    {/* <TextField
                      fullWidth
                      // value={user.user.grad_year}
                    //   value={info.grad_year}
                    //   onChange={(e) => setInfo(prev => ({ ...prev, grad_year: e.target.value }))}
                      disabled
                    //   InputProps={{ disabled: edit }}
                      // value={user.sapid}
                      sx={{
                        marginTop: "10px",
                        borderColor: "none",
                        [`& fieldset`]: {
                          borderRadius: 30,
                          borderColor: "none",
                          boxShadow:
                            "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important",
                        },
                        backgroundColor: "white",
                      }}
                    ></TextField> */}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item ml={0} lg={3} xs={3} my={1}>
                    <Typography sx={{ textAlign: "left", marginTop: "10px",paddingLeft:"1rem",fontSize:"17px" }}>
                      Email
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={12} xs={12} md={12}>
                  <TextField
                    placeholder="name@gmail.com"
                    fullWidth
                    sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem",paddingLeft:"1rem", }}
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
                    {/* <TextField
                      fullWidth
                      // value={user.user.email}
                    //   value={info.email}
                    //   onChange={(e) => setInfo(prev => ({ ...prev, email: e.target.value }))}
                      //onChange={(e) => setUser({ ...user, name: e.target.value })}
                      disabled
                    //   InputProps={{ disabled: edit }}
                      sx={{
                        borderColor: "none",
                        [`& fieldset`]: {
                          borderRadius: 30,
                          borderColor: "none",

                          boxShadow:
                            "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important",
                        },
                        backgroundColor: "white",
                      }}
                    ></TextField> */}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} my={2}>
                    <Typography sx={{ textAlign: "left",paddingLeft:"1rem",fontSize:"17px"  }}>
                      Resume Link
                    </Typography>
                    <TextField
                    placeholder="example.com"
                    fullWidth
                    sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem" ,paddingLeft:"1rem",}}
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
                    {/* <TextField
                      // value={user1.resume_link}
                    //   value={info.resume_link}
                    //   onChange={(e) => setInfo(prev => ({ ...prev, resume_link: e.target.value }))}
                      disabled
                    //   InputProps={{ disabled: edit }}
                      sx={{
                        marginTop: "10px",
                        borderColor: "none",
                        [`& fieldset`]: {
                          borderRadius: 30,
                          boxShadow:
                            "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                        },
                        backgroundColor: "white",
                      }}
                      fullWidth
                    /> */}
                  </Grid>
                </Grid>

                {/* {!profile ? ( */}
                  <>
                    <Grid my={1}>
                      <Typography
                        fullWidth
                        sx={{ textAlign: "left", marginBottom: "5px",paddingLeft:"1rem",fontSize:"17px"  }}
                      >
                        Password
                      </Typography>
                      <Grid item xs={12}>
                      <TextField
                      placeholder="Enter Password"
                        fullWidth
                        sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"5rem !important",marginLeft:"0.7rem" ,paddingLeft:"1rem" }}
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
                        {/* <TextField
                          disabled
                        //   InputProps={{ disabled: edit }}
                        //   value={pass}
                          sx={{
                            borderColor: "none",
                            [`& fieldset`]: {
                              borderRadius: 30,
                              boxShadow:
                                "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                            },
                            backgroundColor: "white",
                          }}
                        //   onChange={(e) => setPass(e.target.value)}
                          // label="Password"
                          fullWidth
                        /> */}
                      </Grid>
                    </Grid>
                    
                  </>
                {/* ) : null} */}

                <Grid container align="left" >
                  <Typography sx={{ marginTop: "25px" ,paddingLeft:"1rem",fontSize:"17px"  }}>
                    Stacks Applied
                  </Typography>
                  <Grid item xs={12} lg={12}  >
                    {/* {user1.stack.map((item, index) => ( */}
                      <Button
                        sx={{
                       
                          border: " solid 3px white",
                          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          backgroundColor: "#6B6EDF",
                          color: "white",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#6B6EDF",
                          },
                          marginTop: "10px",
                          marginRight:"0.4rem",
                          borderRadius: 30,
                          width: "110px",
                        }}
                        // key={index}
                        // label={item.name}
                        onClick={() => {}}
                        onDelete={() => {}}
                      >
                        <CheckCircleOutlineIcon />
                        Design
                        {/* {user1.stack[index].name} */}
                      </Button>
                      <Button
                        sx={{
                       
                          border: " solid 3px white",
                          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          backgroundColor: "#6B6EDF",
                          color: "white",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#6B6EDF",
                          },
                          marginTop: "10px",
                          marginRight:"0.4rem",
                          borderRadius: 30,
                          width: "110px",
                        }}
                        // key={index}
                        // label={item.name}
                        onClick={() => {}}
                        onDelete={() => {}}
                      >
                        <CheckCircleOutlineIcon />
                        App
                        {/* {user1.stack[index].name} */}
                      </Button>
                      
                    {/* ))} */}
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: "25px" }}>
                  <Grid item xs={6}>
                    <Button
                     // size="large"
                      variant="contained"
                      sx={{
                        border: " solid 3px white",
                        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        backgroundColor: "#5154CE",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#5154CE",
                        },
                        borderRadius: "10px",
                      }}
                      // sx={{ textTransform: "none", padding: "4% 10%" }}
                      //onClick={() => setProfile(false)}
                    //   onClick={change}
                    >
                      Edit Profile
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                    //   size="large"
                      variant="contained"
                      sx={{
                        border: " solid 3px white",
                        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        backgroundColor: "#5154CE",
                        color: "white",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#5154CE",
                        },
                        borderRadius: "10px",
                      }}
                      // sx={{ textTransform: "none", padding: "4% 10%" }}
                    //   onClick={handleSave}
                    >
                      Save Profile
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </SideNavbar>
          </div>
    </div>
  )
}

export default Profilepage