import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './FormSignup.css';


function FormSignup() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();


  async function addUser (data) {
try{
  const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  const existingUser = users.find(user => user.email === data.email || user.cpf === data.cpf);
  if (existingUser) {
    alert('Usuário já cadastrado com o mesmo email ou CPF');
    return;}

 const resposta = await fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!resposta.ok) {
      alert("Erro ao cadastrar usuário")
    } else {
    alert("Usuário cadastrado com sucesso!")
  reset(); 
  navigate('/login');
  } 
}catch (error) {
 alert("Houve um erro ao cadastrar o usuário") 
}
}  

async function getAddress(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    const fullAddress = `${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`
    setValue('address', fullAddress)
  } catch (error) {
    console.error(error);
  }
}

function handleSignin() {
    navigate('/login');
  }

  return (
    <div className="divSignup">
    <div className="imgh1Signup">
      
    <img className="logotripflowformsignin" src="/public/logotrip.png" alt="Logo" />
    <h1 className='h1Signup'>Cadastre-se</h1>
    </div>
    
     <form className="formSignup" onSubmit={handleSubmit(addUser)}>
     <div className="inputsdivSignup">
      <label>
        Nome *
        <input className="inputSignup" placeholder="Digite seu nome completo" name="name" {...register('name', { required: 'Nome é obrigatório', validate: value => value.split(' ').length > 1 || 'Nome deve ter pelo menos duas palavras' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
    
      <label>
        CPF *
        <input placeholder="Digite seu CPF"  name="cpf" {...register('cpf', { required: 'CPF é obrigatório', validate: value => value.length === 11 || value.length === 14 || 'CPF deve ter 11 ou 14 dígitos'  })} />
        {errors.cpf && <p>{errors.cpf.message}</p>}
      </label>
      
      
      </div>
      <div className="inputsdivSignup">
       <label>
        Data de Nascimento *
        <input name="birthDate" type="date" {...register('birthDate', { required: 'Data de Nascimento é obrigatória' })} />
        {errors.birthDate && <p>{errors.birthDate.message}</p>}
      </label>
      <label>
        Telefone *
        <input placeholder="Digite seu telefone com DDD" name="phone" {...register('phone', { required: 'O telefone é obrigatório' })} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </label>
      <label>
        Sexo
          <select name="gender" {...register('gender')}>
          <option value="">Selecione</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="outro">Outro</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}
      </label>
       </div>
     
      <div className="inputsdivSignup">
            <label>
        CEP *

        <input placeholder="Digite seu CEP" name="cep" {...register('cep', { required: 'CEP é obrigatório', validate: async value => {
        if (value.length !== 8 && value.length !== 9) {
          return 'CEP deve ter 8 ou 9 dígitos';
        }
        await getAddress(value);
        return true;
      
      }})} onBlur={async (e) => await getAddress(e.target.value)} />
      {errors.cep && <p>{errors.cep.message}</p>}
      </label>
          <label>
         Endereço *
          <input placeholder="Endereço" className="inputSignup" name="address" {...register('address', { required: 'Endereço é obrigatório' })} />
        {errors.address && <p>{errors.address.message}</p>}
      </label>
      </div>
      <div className="inputsdivSignup">
         <label>
        Número *

        <input placeholder="Digite o número" name="addressNumber" type="number" {...register('addressNumber', { required: 'Número é obrigatório' })} />
        {errors.addressNumber && <p>{errors.addressNumber.message}</p>}
      </label>

      <label>
        Complemento
        <input className="inputSignup" placeholder="Complemento" name="addressComplement" {...register('addressComplement')} />
        {errors.addressComplement && <p>{errors.addressComplement.message}</p>}
      </label>
   </div>
   <div className="inputsdivSignup">
      <label>
        Email *
        <input  className="inputSignup3" placeholder="Digite seu email" name="email" type="email" {...register('email', { required: 'Email é obrigatório' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        Senha *
        <input  className="inputSignup3" placeholder="Senha com pelo menos 8 dígitos" name="password" type="password" {...register('password', { required: 'Senha é obrigatória', minLength: { value: 8, message: 'Senha deve ter pelo menos 8 caracteres' } })} />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      </div>
      <div className="btns">
      <button className="btnSignup" type="submit">Cadastrar</button>
  
     <p className="pSignin">Já está cadastrado?</p>
   <button className="btnSignin" onClick={handleSignin} type="button">Faça Login</button>
   </div>
    </form>
   
  
      
    </div>
  );
}

export default FormSignup;