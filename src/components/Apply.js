import React, { useState } from 'react'
import { Box, Typography, TextField, Grid,  Button } from "@mui/material";
import '../styles/application.css'
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Apply() {

  const navigate = useNavigate();
  const [resume, setResume] = useState("")
  const [r1, setR1] = useState("")
  const [r2, setR2] = useState("")
  const [r3, setR3] = useState("")
  const [r4, setR4] = useState("")
  const [r5, setR5] = useState("")
  const [r6, setR6] = useState("")
  const [r7, setR7] = useState("")
  const [front, setFront] = useState(false);
  const [django, setDjango] = useState(false);
  const [node, setNode] = useState(false);
  const [rnative, setRnative] = useState(false);
  const [fsn, setFsn] = useState(false);
  const [flutter, setFlutter] = useState(false);
  const [fsdj, setFsdj] = useState(false);

 
  const submit = () => {
   
    console.log(r1, r2, r3, r4, r5, r6, r7)
    const techStack = {
      "stack": [
      ],
      "resume_link": resume
    };

    if (front == true) {
      techStack.stack.push({ name: "Frontend", repo_link: r1 })
    }
    if (django == true) {
      techStack.stack.push({ name: "Django", repo_link: r2 })
    }
    if (node == true) {
      techStack.stack.push({ name: "Node", repo_link: r3 })
    }
    if (rnative == true) {
      techStack.stack.push({ name: "ReactNative", repo_link: r4 })
    }
    if (fsn == true) {
      techStack.stack.push({ name: "FullstackNode", repo_link: r5 })
    }
    if (flutter == true) {
      techStack.stack.push({ name: "Flutter", repo_link: r6 })
    }
    if (fsdj == true) {
      techStack.stack.push({ name: "FullstackDjango", repo_link: r7 })
    }
    console.log((techStack));


    const axios = require('axios');
    let data = JSON.stringify(techStack);
    let token = localStorage.getItem("token")
    let t = "Token "+token;
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '//devacc3.pythonanywhere.com/accounts/application/',
      headers: {
        'Authorization': t,
        'Content-Type': 'application/json',
        'Cookie': 'csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk; sessionid=zmqzegi0wuqvlef56i3uipyhtbim3gv8'
      },
      data: data
    };

    async function makeRequest() {
      try {
       
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        //toast('Form submitted successfully')
        //// setTimeout(() => {
        //     navigate('/dashboard')
        //   // }, 5000);
        // }});
        navigate('/dashboard');
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest();

  }
  const handle = (e) => {
    let s = e.target.value;
    if (s == 1) {
      //console.log(front,!front)
      if (front == true) {
        setR1("")
      }
      setFront(!front);

    }
    else if (s == 2) {
      if (django == true) {
        setR2("")
      }
      setDjango(!django)
    }
    else if (s == 3) {
      if (node == true) {
        setR3("")
      }
      setNode(!node)
    }
    else if (s == 4) {
      if (rnative == true) {
        setR4("")
      }
      setRnative(!rnative)
    }
    else if (s == 5) {
      if (fsn == true) {
        setR5("")
      }
      setFsn(!fsn)
    }
    else if (s == 6) {
      if (flutter == true) {
        setR6("")
      }
      setFlutter(!flutter)
    }
    else if (s == 7) {
      if (fsdj == true) {
        setR7("")
      }
      setFsdj(!fsdj)
    }
  }

  return (
    <div className="cover_div">
      <Box sx={{ paddingBottom: "9vh", paddingTop: "9vh" }}>
        <Box id="box_apply" sx={{ justfiyContent: "center", alignItems: "center", marginLeft: "29vh", marginRight: "29vh", borderRadius: "20px", backgroundColor: "white !important", paddingBottom: "1vh" }}>

          <Typography className="header-apply" sx={{  paddingTop: "4vh", color: "#5154CE",paddingBottom:"2vh" }} variant="h3">
            Application Form
          </Typography>
          <Grid container mt={3} sx={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
            <Grid item xs={2} lg={4} md={4} sx={{paddingRight:"2rem"}} >
              <DescriptionIcon sx={{ fontSize: "3.5em", paddingTop: "1rem", color: "#5154CE" }} />
            </Grid>
            <Grid item xs={10} lg={8} md={8}>
              <Typography className="stack-mobile-resume" align="left" sx={{ paddingLeft: "3rem", fontSize: "1.3rem" }}>
                Resume Link
              </Typography>
              <TextField
                
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"0.7rem", }}
                className="input-resume"
                id="input-with-icon-textfield"
                InputProps={{
                  disableUnderline: true,
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={resume}
                onChange={(e) => (setResume(e.target.value))}

              />
            </Grid>
            <Grid item xs={2} lg={4} md={4} sx={{paddingRight:"2rem"}}>
              <GitHubIcon sx={{ fontSize: "3.5em", paddingTop: "1rem", color: "#5154CE"}} />
            </Grid>
            <Grid item xs={10} lg={8} md={8} >
              <Typography className="stack-mobile-git" align="left" sx={{ paddingLeft: "3rem", paddingTop: "1rem", fontSize: "1.3rem" }}>
                GitHub Repo Link
              </Typography>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={1} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: ".2rem" ,fontSize:"1.15rem"}}>
                  Frontend
              </Typography>
                <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem" }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !front
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r1}
                onChange={(e) => setR1(e.target.value)}
              />

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={2} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem",fontSize:"1.15rem" }}>
                  Django
              </Typography>
                <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem" ,paddingLeft:"1rem" }}
                className="input"
                id="input-with-icon-textfield"
                disabled

                InputProps={{
                  disableUnderline: true,
                  disabled: !django
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r2}
                onChange={(e) => setR2(e.target.value)}

              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={3} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem",fontSize:"1.15rem" }}>
                  Node
              </Typography>
              <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem"  }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !node
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r3}
                onChange={(e) => setR3(e.target.value)}

              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={4} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem" ,fontSize:"1.15rem"}}>
                  React Native
              </Typography>
              <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem"  }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !rnative
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r4}
                onChange={(e) => setR4(e.target.value)}

              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={5} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem",fontSize:"1.15rem" }}>
                Fullstack Node
              </Typography>
              <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem"  }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !fsn
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r5}
                onChange={(e) => setR5(e.target.value)}

              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={6} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem" ,fontSize:"1.15rem"}}>
                Flutter
              </Typography>
              <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem"  }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !flutter
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r6}
                onChange={(e) => setR6(e.target.value)}
              />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} lg={1} md={1} sx={{paddingTop: "3rem"}}>
            </Grid>
            <Grid item xs={11} lg={11} md={11}> 
              <Grid container >
                <Grid item xs={3} lg={3} md={3}  >
                <input type="checkbox" style={{marginLeft:"4vw",marginTop:"2.7rem"}} className="cont" value={7} onChange={handle}/>
                <span></span>
                </Grid>
                <Grid item xs={9} lg={9} md={9}>
                <Typography className="stack-mobile" align="left" sx={{ paddingLeft: "3.3rem",marginLeft:"0.7rem", paddingTop: "1rem" ,fontSize:"1.15rem"}}>
                Fullstack Django
              </Typography>
              <TextField
                sx={{ marginTop: "0vh", paddingTop: "0vh",marginLeft:"1.6rem",paddingLeft:"1rem"  }}
                className="input"
                id="input-with-icon-textfield"
                disabled
                InputProps={{
                  disableUnderline: true,
                  disabled: !fsdj
                }}
                autoComplete="off"
                name="firstname"
                margin="normal"
                type={"text"}
                variant="standard"
                value={r7}
                onChange={(e) => setR7(e.target.value)}

              />
                </Grid>
              </Grid>
            </Grid>
            
            
          </Grid>
          <div>
            <Button 
             className="apply-mobile-button"
             sx={{
              paddingLeft:"2%",
              paddingRight:"2%",
              borderRadius: "10px", border: " solid 3px white", marginTop: "3vh", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "#5154CE", color: "white",
              "&:hover": {
                color: 'white',
                backgroundColor: '#CBC3E3',

              },justifyContent: "center",
              fontWeight:"bold",
              fontSize:"1rem",
            }} onClick={submit}>Confirm Details</Button>
            {/* <ToastContainer
              autoClose={2000}
              position="top-center"
              /> */}
            <Link to='/dashboard'>
              <Typography align="right" sx={{ marginRight: "2vw",paddingTop:"3vh" }} > Skip for now-{'>'} </Typography>
            </Link>
          </div>
             
        </Box>

      </Box>


    </div>
  )
}

export default Apply