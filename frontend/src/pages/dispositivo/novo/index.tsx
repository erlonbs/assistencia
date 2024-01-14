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
    <section className="containerDispositivo">
      <h1 className="titulo">Novo dispositivo</h1>

      <form className='containerForm' onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          value={dispositivoName}
          onChange={e => setDispositivoName(e.target.value)}
        />

        <label htmlFor="">Marca:</label>
        <input
          type="text"
          value={marca}
          onChange={e => setMarca(e.target.value)}
        />

        <label htmlFor="">Modelo:</label>
        <input
          type="text"
          value={modelo}
          onChange={e => setModelo(e.target.value)}
        />

        <label htmlFor="">Cor:</label>
        <input type="text" value={cor} onChange={e => setCor(e.target.value)} />

        <label htmlFor="">Serial:</label>
        <input type="text" value={serial} onChange={e => setSerial(e.target.value)} />


        <label htmlFor="">Descricao:</label>
        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />

        <label htmlFor="">Código do Cliente</label>
        <input type="text" value={clienteId} onChange={e => setClienteId(e.target.value)} />

        <button type="submit">Inserir</button>
      </form>
      
      <Link to={"/Dispositivo/1"} >
        <button type="button" value="Voltar">Voltar</button>
      </Link>

    </section>
  )
}

export default NovoDispositivo
