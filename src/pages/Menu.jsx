import { Box } from '@mui/system'
import {MenuItem} from "../data/Data"
import React from 'react'
import Layout from '../component/Layout'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
const Menu = () => {
  return (
    <Layout>
   <Box sx={{display: "flex", flexWrap: "wrap"}}>
    {
      MenuItem.map(menu => (
        <Card sx={{maxWidth:'300px', display: "flex", m:2 }}>
          <CardActionArea>
            <CardMedia sx={{minHeight: '400px'}} component={'img'} src={menu.image} alt={menu.name}/>
            <CardContent>
              <Typography variant='h5' gutterBottom component={"div"}>
                {menu.name}
              </Typography>
              <Typography variant='body2'>
                {menu.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))
    }
   </Box>
    </Layout>
  )
}

export default Menu