import React from 'react'
import SideNavbar from './SideNavbar'
import { useEffect, useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

const MyNavbar = () => {
    const [toggle,setToggle]=useState(true);
    const handleToggle=(e)=>{
      setToggle(!toggle);
      console.log(toggle);
    }
  return (
    <>
        {toggle && <SideNavbar/>}
        <Button onClick={handleToggle}>Toggle switch</Button>
    </>
  )
}

export default MyNavbar