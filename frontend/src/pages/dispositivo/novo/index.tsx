import { BASE_URL } from 'utils/requests';
import './novoDispositivo.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';

import { Clientes } from 'types/cliente';

function NovoDispositivo() {

  const [dispositivoName, setDispositivoName] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [cor, setCor] = useState('')
  const [serial, setSerial] = useState('')
  const [descricao, setDescricao] = useState('')
  const [clienteId, setClienteId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const BASE = `${BASE_URL}/dispositivos`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { dispositivoName, marca, modelo, cor, serial, descricao, clienteId }

    try {

      const responseCliente = await axios.get<Clientes>(`${BASE_URL}/clientes/${clienteId}`)
      //conferindo se clienteId está cadastrado
      if (responseCliente) {
        await axios.post(BASE, dadosNovo)
        setMensagem('Novo dispositivo inserido!')
        limpaCampos()

      } else {
        setMensagem(`Verifique os dados digitados e tente novamente!`)

      }
    } catch (error) {
      setMensagem(`Não foi possível inserir ${dispositivoName} pois o cliente: ${clienteId} não existe!`)

    }
  }

  function limpaCampos() {
    setDispositivoName('');
    setMarca('');
    setModelo('');
    setCor('');
    setSerial('');
    setDescricao('');
    setClienteId('');

  }

  return (

    <section className="containerDispositivo novoDispositivo ">
      <h1 className="titulo">Novo dispositivo</h1>
      <ExibirMensagem mensagem={mensagem} />

      <form className='containerForm' onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="nome">Nome:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoName}
          placeholder='Nome'
          required
          onChange={e => setDispositivoName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Marca:</label>
        <input className='inputForm'
          type="text"
          value={marca}
          placeholder='Marca'
          required
          onChange={e => setMarca(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Modelo:</label>
        <input className='inputForm'
          type="text"
          value={modelo}
          placeholder='Modelo'
          required
          onChange={e => setModelo(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="">Cor:</label>
        <input className='inputForm'
          type="text"
          value={cor}
          placeholder='Cor'
          required
          onChange={e => setCor(e.target.value)} />

        <label className="tituloEntrada" htmlFor="">Serial:</label>
        <input className='inputForm'
          type="text"
          value={serial}
          placeholder='Serial'
          required
          onChange={e => setSerial(e.target.value)} />


        <label className="tituloEntrada" htmlFor="">Descricao:</label>
        <input className='inputForm'
          type="text"
          value={descricao}
          placeholder='Descrição'
          required
          onChange={e => setDescricao(e.target.value)} />

        <label className="tituloEntrada" htmlFor="">Código do Cliente</label>
        <input className='inputForm' type="text"
          value={clienteId}
          placeholder='Código'
          required
          onChange={e => setClienteId(e.target.value)} />

        <div className='btnIcone'>
          <button type="submit">Inserir</button>
        </div>

        <ExibirMensagem mensagem={mensagem} />
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
