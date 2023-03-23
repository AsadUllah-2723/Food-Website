import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../component/Layout'
const About = () => {
  return (
    <Layout>    
      <Box sx={{backgroundColor: 'black', color: 'white', "& h4": {
        fontWeight: 'bold'}, textAlign:'center', m: '2'}}>
        <Typography variant='h4'>
         The History of Food Mania Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam, modi atque harum, animi repellat aliquid ducimus minus, totam id est magni? Nemo explicabo alias natus officiis adipisci quibusdam omnis iste libero consequatur perspiciatis consectetur ipsam molestiae eum reprehenderit inventore esse nihil illo, veniam enim sed delectus earum suscipit? Amet accusamus omnis sunt et maiores, tempora similique iure error provident reiciendis fuga magni maxime aut laborum saepe praesentium, necessitatibus deserunt odit quidem cumque? Beatae quidem dolores magnam placeat doloribus optio aut fugit molestias eos ipsa dolor, odit perspiciatis voluptatibus natus dolore ab odio modi quas? Soluta atque maxime nam eos reprehenderit illum, itaque dignissimos debitis minus aspernatur amet, modi iste eius error et earum odit, similique sit ipsam aut numquam voluptatem sint. Laboriosam ea modi, dolorem, facere maxime fugit aliquid autem porro quod iste tempora! Repudiandae, quibusdam enim tempore obcaecati tenetur eveniet possimus atque numquam impedit, dignissimos labore a accusamus?</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti velit officiis. Enim deleniti cumque, facilis ullam quisquam natus odit. Veniam adipisci quia nesciunt sunt voluptatum hic at! Aut placeat ratione similique iste sapiente voluptatibus quod praesentium totam, voluptatum illum delectus, expedita eaque atque accusamus iusto, quidem eveniet molestias tenetur.</p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequatur ad exercitationem facere voluptatibus sequi, aperiam iste ducimus cum eos. Aliquam ducimus error doloremque aspernatur minima? Aliquam quod voluptatibus at.</p>
      </Box>
    </Layout>

  )
}

export default About