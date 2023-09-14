import { BASE_URL } from 'utils/requests'
import './styles.css'
import axios from 'axios'
import React, { useState } from 'react'

function Cadastrar() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [cpf, setCpf] = useState('')

  const BASE = `${BASE_URL}/clientes`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosCadastro = { name, address, telephone, cpf }

    try {
      const response = await axios.post(BASE, dadosCadastro)
      console.log('cadastro realizado com sucesso!', response.data)
    } catch (error) {
      console.error('Não foi possível realizar o cadastro:', error)
    }
  }

  return (
    <body className="inicio">
      <h1 className="titulo">Cadastro de Clientes</h1>

      <form className='container' onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="">Endereço:</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <label htmlFor="">Telefone:</label>
        <input
          type="text"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />

        <label htmlFor="">Cpf:</label>
        <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>
     
      <form className="btnVoltar">
        <a href="/Cliente/1">
          <input type="button" value="Voltar " />
        </a>
      </form>
    </body>
  )
}

export default Cadastrar
