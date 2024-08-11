import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSpots } from '../../hooks/useSpots';

import './FormSpotRegistration.css';
import { api } from '../../services/api';

function FormSpotRegistration() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const spots = useSpots();
  const user = JSON.parse(localStorage.getItem('@tripflow:user'));
  const userId = user?.id;

  async function addSpot (data) {
    try {
      const existingSpot = spots.find(spot => spot.name === data.name);
      if (existingSpot) {
        alert('Local já cadastrado com o mesmo nome');
        return;
      }

      const resposta = await api('/spots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (!resposta.ok) {
        alert("Erro ao cadastrar local")
      } else {
        alert("Local cadastrado com sucesso!")
        reset(); //para limpar o formulário após enviar
        navigate('/locals');
      } 
    } catch (error) {
      alert("Houve um erro ao cadastrar o local") 
    }
  }  

  async function getAddress(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      const fullAddress = `${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`
      setValue('address', fullAddress)
      setValue('latitude', data.latitude)
      setValue('longitude', data.longitude)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="divspotregistration">
 
      <div className="imgh1spotregistration">
        <h1 className='h1spotregistration'>Cadastre um Local</h1>
       </div>
      
      <form className="formspotregistration" onSubmit={handleSubmit(addSpot)}>

        <div className="inputsdivspotregistration">
          <label>
            Nome *
            <input className="inputspotregistration2" placeholder="Digite o nome do local" name="name" {...register('name', { required: 'Nome é obrigatório' })} />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label>
            Data da Visita *
            <input name="visitDate" type="date" {...register('visitDate', { required: 'Data da visita é obrigatória' })} />
            {errors.visitDate && <p>{errors.visitDate.message}</p>}
          </label>
          </div>
   
          <div className="inputsdivspotregistration">
          <label>
            Descrição *
            <textarea className="textspotregistration" placeholder="Digite a descrição do local" name="description" {...register('description', { required: 'Descrição é obrigatória' })} />
            {errors.description && <p>{errors.description.message}</p>}
          </label>
          <label className="avaliacao">
           Avaliação *
           <select name="rate" {...register('rate', { required: 'Avaliação é obrigatória' })}>
             <option value="">Selecione</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
           </select>
           {errors.rate && <p>{errors.rate.message}</p>}
         </label>
            </div>
   
          <div className="inputsdivspotregistration">
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
            <input placeholder="Endereço" className="inputspotregistration2" name="address" {...register('address', { required: 'Endereço é obrigatório' })} />
            {errors.address && <p>{errors.address.message}</p>}
          </label>
                  </div>

  <div className="inputsdivspotregistration">
          
            <div className="latlong" >
          <label>
            Latitude *
            <input className="latlong" placeholder="Latitude"  name="latitude" {...register('latitude', { required: 'Latitude é obrigatória' })} />
            {errors.latitude && <p>{errors.latitude.message}</p>}
          </label>
          </div>

 <div className="latlong">
<label>
  Longitude *
  <input placeholder="Longitude" name="longitude" {...register('longitude', { required: 'Longitude é obrigatória' })} />
  {errors.longitude && <p>{errors.longitude.message}</p>}
</label>
</div>



<div className="inputsdivspotregistration">
  <div className="labeloption">
    <label>
      Categoria *
      <select name="attractionCategory" {...register('attractionCategory', { required: 'Categoria da atração é obrigatória' })}>
        <option value="">Selecione</option>
        <option value="natural">Natural</option>
        <option value="urbana">Urbana</option>
      </select>
      {errors.attractionCategory && <p>{errors.attractionCategory.message}</p>}
    </label>
  </div>


          <div className="labeloption">
          <label>
            Visibilidade *
            <select name="visibility" {...register('visibility', { required: 'Visibilidade é obrigatória' })}>
              <option value="">Selecione</option>
              <option value="private">Privado</option>
              <option value="public">Público</option>
            </select>
            {errors.visibility && <p>{errors.visibility.message}</p>}
          </label>
          </div>
          </div>



<div className="inputsdivspotregistration">
<div className="labeloption">
          <label>
            Coleta Seletiva *
            <select name="selectiveWasteCollection" {...register('selectiveWasteCollection', { required: 'Coleta seletiva de lixo é obrigatória' })}>
              <option value="">Selecione</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            {errors.selectiveWasteCollection && <p>{errors.selectiveWasteCollection.message}</p>}
          </label>
          </div>
        
          <div className="labeloption">
          <label>
            Nível de Aventura *
            <select name="adventureLevel" {...register('adventureLevel', { required: 'Nível de aventura é obrigatório' })}>
              <option value="">Selecione</option>
              <option value="radical">Radical</option>
              <option value="moderado">Moderado</option>
              <option value="tranquilo">Tranquilo</option>
            </select>
            {errors.adventureLevel && <p>{errors.adventureLevel.message}</p>}
          </label>
          </div>
          </div>



<div className="inputsdivspotregistration">
          <div className="labeloption">
          <label>
            Custo *
            <select name="cost" {...register('cost', { required: 'Custo é obrigatório' })}>
              <option value="">Selecione</option>
              <option value="gratuito">Gratuito</option>
              <option value="barato">Barato</option>
              <option value="mediano">Mediano</option>
              <option value="caro">Caro</option>
            </select>
            {errors.cost && <p>{errors.cost.message}</p>}
          </label>
          </div>
    
          <div className="labeloption">
          <label>
            Acessibilidade *
            <select name="accessibility" {...register('accessibility', { required: 'Acessibilidade é obrigatória' })}>
              <option value="">Selecione</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
            {errors.accessibility && <p>{errors.accessibility.message}</p>}
          </label>
       
          </div>
          </div>
          <div className="inputsdivspotregistration">
          <label>
            ID do Usuário
<input  placeholder="ID do Usuário" name="user_id" {...register('user_id', { required: 'ID do usuário é obrigatório' })} defaultValue={userId} disabled />
          </label>


  </div>
        </div>
        <button className="btnspotregistration" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormSpotRegistration;