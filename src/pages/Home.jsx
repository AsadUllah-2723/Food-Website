import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../component/Layout"
import Banner from "../images/Banner.jpg"
import "./HomeStyle.css"
const Home = () => {
  return (
    <Layout>
   <div className="home" style={{backgroundImage: `url(${Banner})`, color:"white"}} >
    <div className="container">
    <h1>FOOD MANIA</h1>
    <p>Where every flavor tells a story</p>
    <Link to="/menu">
    <button> Order Now </button>
    </Link>
    </div>
   </div>
    </Layout>
  )
}

export default Home