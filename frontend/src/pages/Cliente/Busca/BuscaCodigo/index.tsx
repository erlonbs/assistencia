import axios from 'axios'
import './styles.css'
import { Clientes } from 'types/cliente'

import { BASE_URL } from 'utils/requests'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import editarImagem from 'assets/icon/editar.png'

import excluirImagem from 'assets/icon/excluir.png'

function BuscaCodigo() {
  const [clienteId, setClienteId] = useState<string>()

  const [cliente, setCliente] = useState<Clientes>()

  const [mensagem, setMensagem] = useState<string>()

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)
    })
  }, [clienteId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (cliente) {
      setMensagem(`Verifique abaixo os dados de : ${cliente.name}`)
    } else {
      setMensagem(' Cliente inexistente')
    }
  }

  return (
    <div className='containerCliente'>
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Entre com o código do cliente:</h2>

        <div className="entrada">
          <input
            type="text"
            name="codigo"
            value={clienteId}
            onChange={e => setClienteId(e.target.value)}
          ></input>
        </div>
      </form>

      {mensagem && <div className="mensagem">{mensagem}</div>}

      <table className="tabela">
        <thead>
          <tr className="coluna">
            <th className="cabecalho">Código</th>
            <th className="cabecalho">Nome</th>
            <th className="cabecalho">Endereço</th>
            <th className="cabecalho">Telefone</th>
            <th className="cabecalho">CPF</th>
            <th className="cabecalho">Editar</th>
            <th className="cabecalho">Excluir</th>
          </tr>
        </thead>
        <tbody className="conteudo">
          {
            <tr className="coluna" key={cliente?.id}>
              <td className="celula">{cliente?.id}</td>
              <td className="celula">{cliente?.name}</td>
              <td className="celula">{cliente?.address}</td>
              <td className="celula">{cliente?.telephone}</td>
              <td className="celula">{cliente?.cpf}</td>
              <td className="celula">
                <a href="/Cliente/Atualizar">
                  <img
                    className="editar"
                    src={editarImagem}
                    alt="icone editar"
                  />
                </a>
              </td>
              <td className="celula">
                <a href="/Cliente/Excluir">
                  <img
                    className="excluir"
                    src={excluirImagem}
                    alt="icone excluir"
                  />
                </a>
              </td>
            </tr>
          }
        </tbody>
      </table>

      <Link className="voltar" to="/Cliente/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>
    </div>
  )
}

export default BuscaCodigo
