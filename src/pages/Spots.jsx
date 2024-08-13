// import { Link } from "react-router-dom"
// import SidebarComponent from "../../components/SideBar/SideBar"
import Header from "../components/Header/Header"
// import {useState, useEffect } from "react"
import './Pages.css'
import ListSpots from "../components/ListSpots/ListSpots";


function SpotsPage() {
   // fazer lógica para mostrar no primeiro carregamento
  
      return (
          <div className='Grid-listspots'>
          <Header />
        {/* <Hero/> */}

          <ListSpots />
      
 
        </div>
      )
  }


export default SpotsPage