import React from 'react'
import { useState } from 'react';
import { AppBar, Typography,Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from "react-router-dom"
import "./HeaderStyle.css"

//MOBILE NEVBAR
const nevbar = () => {
  const [mobileNev, setMobileNev] = useState(false)
  const handleDrawer = () => {
    setMobileNev(!mobileNev)
  }
  const drawer = (
    <Box onClick={handleDrawer} sx={{textAlign:'center'}}>
       <Typography
       color={"black"}
       variant="h5"
       component="div"
       sx={{ flexGrow: 1}}>
     <RamenDiningIcon/>
        FOOD MANIA
      </Typography>
      <Divider/>
        <ul className='mobileNevbar'>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/menu"}>Menu</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        </ul>
    </Box>
  )

  //NEVBAR
  return (
   <>
   <Box>
    <AppBar component={"nev"} sx={{bgcolor: "black"}}>
      <Toolbar>
      <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawer}
              >
          <MenuIcon/>
        </IconButton>
      <Typography
       color={"yellow"}
       variant="h5"
       component="div"
       sx={{ flexGrow: 1}}>
     <RamenDiningIcon/>
        FOOD MANIA
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <ul className='nevbar'>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/menu"}>Menu</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        
        </ul>
      </Box>
      </Toolbar>
    </AppBar>
    <Box component="nev">
      <Drawer variant='temporary' open={mobileNev}
      onClose={handleDrawer}
      sx={{display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: "240px",
      },
    }}
  >
    {drawer}
      </Drawer>
    </Box>
    <Toolbar/>
   </Box>
   </>
  )
}

export default nevbar