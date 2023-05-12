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

export default function Profile() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [edit, setEdit] = useState(true);
  const [pass,setPass]=useState("");
  const change = () => {
    setProfile(false);
    setEdit(false);
  };
  const [profile, setProfile] = useState(true);
  let sap = localStorage.getItem("sapid");
  let token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [info, setInfo] = useState();
  const [user1, setUser1] = useState();
  const [app, setApp] = useState({
    stack: [
      {
        name: "",
        repo_link: "",
      },
    ],
    resume_link: "",
  });




  async function handleSave() {

    
    const axios = require('axios');
    let t="Token "+localStorage.getItem("token")

    let data = ({
      "user": {
        "name": info.name,
        "sapid": info.sapid,
        "grad_year": info.grad_year,
        "email": info.email,
        "password": pass,
        "confirm_password": pass
      }
    });
    console.log((data));
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: '//devacc3.pythonanywhere.com/accounts/interviewee_update/',
      headers: { 
        'Authorization': t, 
        'Content-Type': 'application/json', 
        'Cookie': 'csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk; sessionid=zmqzegi0wuqvlef56i3uipyhtbim3gv8'
      },
      data : data
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setProfile(true);
        setEdit(true);
        console.log(response)
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest();
        

    
  }

  useEffect(() => {
    //fetching user details
    const axios = require("axios");
    let t = "Token " + token;
    console.log(t);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://devacc3.pythonanywhere.com/accounts/interviewee_update/",
      headers: {
        Authorization: t,
        Cookie:
          "csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk; sessionid=zmqzegi0wuqvlef56i3uipyhtbim3gv8",
      },
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(response.data[0])
        setUser(response.data);
        setInfo(response.data.user);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest();

    let config1 = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://devacc3.pythonanywhere.com/accounts/application/",
      headers: {
        Authorization: t,
        Cookie:
          "csrftoken=uxlPQsLGxNdIMQruSrXWrOYRtt86ZhHRSj3yzs7OowdMhzMy2dskVVu8aOTVaNxk; sessionid=zmqzegi0wuqvlef56i3uipyhtbim3gv8",
      },
    };

    async function makeRequest1() {
      try {
        const response = await axios.request(config1);
        //console.log(response.data);
        setUser1(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    makeRequest1();
  }, []);


  return (
    <>
      {user && user1 ? (
        <>
          <div className="class1" style={{ paddingBottom: "55px" }}>
            <SideNavbar>
              <Typography
                className="heading_profile"
                sx={{
                  paddingTop: "40px",
                  fontSize: "40px",
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
                    <Typography sx={{ textAlign: "left" }}>Name:</Typography>
                  </Grid>
                </Grid>
                <Grid container my={1}>
                  <Grid item lg={12} xs={12} md={12}>
                    <TextField
                      fullWidth
                      // value={edit ? info.name : user.user.name}
                      value={info.name}
                      onChange={(e) => setInfo(prev => ({ ...prev, name: e.target.value }))}
                      disabled={edit}
                      InputProps={{ disabled: edit }}
                      sx={{
                        borderColor: "none",
                        [`& fieldset`]: {
                          borderRadius: 30,
                          borderColor: "none",
                          boxShadow:
                            "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset !important",
                        },
                      }}
                    />

                  </Grid>
                </Grid>

                <Grid container sx={{ marginTop: "20px" }}>
                  <Grid item xs={12} lg={5} md={6}>
                    <Typography sx={{ textAlign: "left" }}>Sapid</Typography>
                    <TextField
                      my={1}
                      fullWidth
                      disabled
                      // InputProps={{ disabled: edit }}
                      value={user.user.sapid}
                   
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
                    ></TextField>
                  </Grid>
                  <Grid item lg={1} md={1}></Grid>
                  <Grid item xs={12} lg={6} md={6}>
                    <Typography sx={{ textAlign: "left" }}>
                      Graduation Year
                    </Typography>
                    <TextField
                      fullWidth
                      // value={user.user.grad_year}
                      value={info.grad_year}
                      onChange={(e) => setInfo(prev => ({ ...prev, grad_year: e.target.value }))}
                      disabled
                      InputProps={{ disabled: edit }}
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
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item ml={0} lg={3} xs={3} my={1}>
                    <Typography sx={{ textAlign: "left", marginTop: "10px" }}>
                      Email
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={12} xs={12} md={12}>
                    <TextField
                      fullWidth
                      // value={user.user.email}
                      value={info.email}
                      onChange={(e) => setInfo(prev => ({ ...prev, email: e.target.value }))}
                      //onChange={(e) => setUser({ ...user, name: e.target.value })}
                      disabled
                      InputProps={{ disabled: edit }}
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
                    ></TextField>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} my={2}>
                    <Typography sx={{ textAlign: "left" }}>
                      Resume Link
                    </Typography>
                    <TextField
                      // value={user1.resume_link}
                      value={info.resume_link}
                      onChange={(e) => setInfo(prev => ({ ...prev, resume_link: e.target.value }))}
                      disabled
                      InputProps={{ disabled: edit }}
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
                    />
                  </Grid>
                </Grid>

                {!profile ? (
                  <>
                    <Grid my={1}>
                      <Typography
                        fullWidth
                        sx={{ textAlign: "left", marginBottom: "5px" }}
                      >
                        Password
                      </Typography>
                      <Grid item xs={12}>
                        <TextField
                          disabled
                          InputProps={{ disabled: edit }}
                          value={pass}
                          sx={{
                            borderColor: "none",
                            [`& fieldset`]: {
                              borderRadius: 30,
                              boxShadow:
                                "rgb(198,198,198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                            },
                            backgroundColor: "white",
                          }}
                          onChange={(e) => setPass(e.target.value)}
                          // label="Password"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    
                  </>
                ) : null}

                <Grid container>
                  <Typography sx={{ marginTop: "25px" }}>
                    Stacks Applied
                  </Typography>
                  <Grid item xs={12} lg={12}>
                    {user1.stack.map((item, index) => (
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
                          marginTop: "30px",

                          borderRadius: 30,
                          width: "110px",
                        }}
                        key={index}
                        label={item.name}
                        onClick={() => {}}
                        onDelete={() => {}}
                      >
                        <CheckCircleOutlineIcon />
                        {user1.stack[index].name}
                      </Button>
                    ))}
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: "25px" }}>
                  <Grid item xs={6}>
                    <Button
                      size="large"
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
                      onClick={change}
                    >
                      Edit
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      size="large"
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
      ) : (
        <>
          <Loader></Loader>
        </>
      )}
    </>
  );
}
