import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor: "black", color:"white", p:2 ,position: 'sticky', top: '100%'}}>
      <Box sx={{my: 2, 
"& svg": {
  fontSize: "40px",
  cursor: "pointer",
  mr: 2,
},
"& svg:hover": {
  color: "yellow",
  transform: "translateX(5px)",
  transition: "all 500ms",
      }
      }}>
        <FacebookIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        <GitHubIcon/>
      </Box>
      <Typography variant='h5'>
        All Right Reserved &copy; ASAD
      </Typography>
    </Box>
    </>
  )
}

export default Footer