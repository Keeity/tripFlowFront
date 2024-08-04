// import { Link } from "react-router-dom"
// import SidebarComponent from "../../components/SideBar/SideBar"
import Header from "../components/Header/Header"
// import {useState, useEffect } from "react"
import './Pages.css'
import CardSpots from "../components/CardSpots/CardSpots";

function SpotsPage() {
   // fazer lógica para mostrar no primeiro carregamento
  
      return (
          <div className='grid-container'>
          {/* A sintaxe <Header /> é equivalente a chamar React.createElement(Header). Nao tem abertura porque nao precisa escrever nada dentro e nao tem*/}
          <Header />
        
      
          <CardSpots />
      
 
        </div>
      )
  }


export default SpotsPage