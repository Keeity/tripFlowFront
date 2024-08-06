import './FormSignin.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useForm } from "react-hook-form"
import { useAuth } from '../../hooks/useAuth'


function FormSignin() {


  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { signIn } = useAuth()

async function onSubmit(data) {
      try {
const isSucess = await signIn(data)
if (isSucess) {

                navigate('/dashboard')
          } else {
              alert('Usuário ou senha incorretos')
          }

      } catch (error) {
          console.log(error)
      }
  }

  return (
      <div className= 'divSignin'>

           <div className="imgh1signin">
            
   
  
           <h1 className='h1signin'>Entrar</h1>  

                  <img
            className="logotripflowformsignin"
              src="/public/logotrip.png"

           ></img>         
            </div>     
         <form className='formSignin' onSubmit={handleSubmit(onSubmit)}>
    
           <input placeholder="Email" type="text" {...register('email')} />
        <input placeholder="Password" type="password" {...register('password')} />
        <button className="btnsignin" type="submit">Entre</button>
          </form>
    

      </div>
  )
}


export default FormSignin