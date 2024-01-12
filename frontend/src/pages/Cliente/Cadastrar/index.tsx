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
    <section className="containerCliente">
      <h1 className="titulo">Cadastro de Clientes</h1>

      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="nome">
          Nome:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          value={clienteName}

          onChange={e => setClienteName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="endereco">
          Endereço:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="telefone">
          Telefone:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="cpf">
          Cpf:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />


        <button className="btnCadastrar" type="submit" >
          Cadastrar
        </button>
      </form>

      <div id="menssagem"></div>


      <Link className="voltar" to="/Cliente/1">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </section>
  )
}

export default Cadastrar
