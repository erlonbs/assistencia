import { BASE_URL } from 'utils/requests'
import './cadastrarStyles.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cadastrar() {
  const [clienteName, setClienteName] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [cpf, setCpf] = useState('')


  const BASE = `${BASE_URL}/clientes`

  const exibirMensagem = (mensagem: string, responseData: any) => {
    const mensagemElemento = document.createElement('div')
    mensagemElemento.textContent = mensagem

    const localParaExibir = document.getElementById('menssagem')
    localParaExibir?.appendChild(mensagemElemento)

    console.log('Dados da resposata: ' + responseData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosCadastro = { clienteName, address, telephone, cpf }

    try {
      const response = await axios.post(BASE, dadosCadastro)
      exibirMensagem('cadastro realizado com sucesso!', response.data)
      // limpa dados após cadastrar
      limpaCampos();
    } catch (error) {
      exibirMensagem('Não foi possível realizar o cadastro:', error)
    }
  }

  const limpaCampos = () => {
    setClienteName('')
    setAddress('')
    setTelephone('')
    setCpf('')
  }

  return (
    <section className="containerCliente cadastrarCliente">
      <h1 className="titulo">Cadastro de Clientes</h1>

      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="">
          Entre com os dados:
        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          placeholder='Nome'
          value={clienteName}

          onChange={e => setClienteName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="endereco">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={address}
          placeholder='Endereço'
          onChange={e => setAddress(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="telefone">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={telephone}
          placeholder='Telefone'
          onChange={e => setTelephone(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="cpf">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={cpf}
          placeholder='Cpf'
          onChange={e => setCpf(e.target.value)}
        />

        <div className='btnIcone'>
          <button type="submit" >
            Cadastrar
          </button>
        </div>

      </form>
      <div className="btnIcone">
        <Link to="/Cliente/">
          <button>voltar</button>
        </Link>
      </div>

      <div id="menssagem"></div>



    </section>
  )
}

export default Cadastrar
