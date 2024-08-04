import './FormSignin.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
// import { useAuth } from '../context/AuthContext.jsx'
// import { apiLogin } from "../services/api.js"
import { useForm } from "react-hook-form"
import { useAuth } from '../../hooks/useAuth'


function FormSignin() {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { signIn } = useAuth()
  
  // const { login } = useAuth()

//   const handleSubmit = async (event) => {
//       event.preventDefault()

async function onSubmit(data) {
      try {
const isSucess = await signIn(data)
if (isSucess) {
        // redireciona para algum lugar
                navigate('/painel')
          } else {
              alert('Usuário ou senha incorretos')
          }

      } catch (error) {
          console.log(error)
      }
  }

  return (
      <div className= 'formSignin'>
  <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" type="text" {...register('email')} />
        <input placeholder="Password" type="password" {...register('password')} />
        <button type="submit">Entre</button>
          </form>
        

      </div>
  )
}


export default FormSignin