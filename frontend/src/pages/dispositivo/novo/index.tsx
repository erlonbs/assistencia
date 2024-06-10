import { BASE_URL } from 'utils/requests';
import './novoDispositivo.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function NovoDispositivo() {
  const [dispositivoName, setDispositivoName] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [cor, setCor] = useState('')
  const [serial, setSerial] = useState('')
  const [descricao, setDescricao] = useState('')
  const [clienteId, setClienteId] = useState('');

  const BASE = `${BASE_URL}/dispositivos`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { dispositivoName, marca, modelo, cor, serial, descricao, clienteId }

    try {
      const response = await axios.post(BASE, dadosNovo)
      console.log('Novo dispositivo inserido!', response.data)
    } catch (error) {
      console.error('Não foi possível inserir o dispositivo:', error)
    }
  }

  return (

    <section className="containerDispositivo novoDispositivo ">
      <h1 className="titulo">Novo dispositivo</h1>

      <form className='containerForm' onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="nome">Nome:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoName}
          placeholder='Nome'
          onChange={e => setDispositivoName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Marca:</label>
        <input className='inputForm'
          type="text"
          value={marca}
          placeholder='Marca'
          onChange={e => setMarca(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Modelo:</label>
        <input className='inputForm'
          type="text"
          value={modelo}
          placeholder='Modelo'
          onChange={e => setModelo(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Cor:</label>
        <input className='inputForm' 
        type="text" 
        value={cor} 
        placeholder='Cor'
        onChange={e => setCor(e.target.value)} />

        <label className="tituloEntrada" htmlFor="">Serial:</label>
        <input className='inputForm'
        type="text" 
        value={serial} 
        placeholder='Serial'
        onChange={e => setSerial(e.target.value)} />


        <label className="tituloEntrada" htmlFor="">Descricao:</label>
        <input className='inputForm' 
        type="text" 
        value={descricao}
        placeholder='Descrição'
         onChange={e => setDescricao(e.target.value)} />

        <label className="tituloEntrada" htmlFor="">Código do Cliente</label>
        <input type="text"
         value={clienteId} 
         placeholder='Código'
         onChange={e => setClienteId(e.target.value)} />

        <button type="submit">Inserir</button>
      </form>

      <div className='btnIcone'>
        <Link to="/dispositivo/">
          <button type="submit">Voltar</button>
        </Link>
      </div>

    </section>

  )
}

export default NovoDispositivo
