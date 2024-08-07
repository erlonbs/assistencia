import { BASE_URL } from 'utils/requests'
import './cadastrarStyles.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExibirMensagem from 'components/Mensagem/mensagem';

function Cadastrar() {
  const [clienteName, setClienteName] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [cpf, setCpf] = useState('')
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] = useState<'sucesso' | 'erro'>('erro')


  const BASE = `${BASE_URL}/clientes`
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosCadastro = { clienteName, address, telephone, cpf }

    try {
      const response = await axios.post(BASE, dadosCadastro)
      setMensagem('cadastro realizado com sucesso!')
      setMensagemTipo('sucesso')
      // limpa dados após cadastrar
      limpaCampos();
    } catch (error) {
      setMensagem('Não foi possível realizar o cadastro:')
      setMensagemTipo('erro')
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
        <ExibirMensagem mensagem={mensagem} mensagemType={mensagemTipo}/>
      </form>
      <div className="btnIcone">
        <Link to="/Cliente/">
          <button>voltar</button>
        </Link>
    
      </div>


    </section>
  )
}

export default Cadastrar
