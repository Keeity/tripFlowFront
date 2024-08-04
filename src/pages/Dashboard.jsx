// import { Link } from "react-router-dom"
// import SidebarComponent from "../../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import Hero from '../components/Hero/Hero'
// import {useState, useEffect } from "react"
import './Pages.css'
import CardSpots from "../components/CardSpots/CardSpots";


function DashboardPage() {
 
    return (
        <div className='grid-container'>
        {/* A sintaxe <Header /> é equivalente a chamar React.createElement(Header). Nao tem abertura porque nao precisa escrever nada dentro e nao tem*/}
        <Header />
      
      <Hero />
    
        <CardSpots />
    

      </div>
    )
}


export default DashboardPage