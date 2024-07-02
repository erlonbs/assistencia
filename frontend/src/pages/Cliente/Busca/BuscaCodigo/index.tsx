import axios from 'axios'
import './buscaCodigo.css'

import { Clientes } from 'types/cliente'
import { BASE_URL } from 'utils/requests'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import editarImagem from 'assets/icon/editar.png'
import excluirImagem from 'assets/icon/excluir.png'
import ExibirMensagem from 'components/Mensagem/mensagem'


function BuscaCodigo() {
  const [clienteId, setClienteId] = useState<string>('');
  const [cliente, setCliente] = useState<Clientes>();
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (clienteId) {
      axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
        setCliente(response.data)
        setMensagem(`Dados do cliente: ${response.data.clienteName}`)
      })
        .catch(error =>
          setMensagem(`Cliente não existe!`));
          

    } else (setMensagem('Prencha o campo'))
    
  }, [clienteId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()


  }

  return (
    <section className='containerCliente codigoCliente'>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1 className='titulo tituloPersonalizado'>Entre com o código do cliente:</h1>
        <ExibirMensagem mensagem={mensagem} />
        <div className="entrada">
          <input
            type="text"
            name="codigo"
            value={clienteId}
            onChange={e => setClienteId(e.target.value)}
          ></input>
        </div>
      </form>

   

      <div className='tabela-scroll'>

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
              <tr className="coluna" key={cliente?.clienteId}>
                <td className="celula">{cliente?.clienteId}</td>
                <td className="celula">{cliente?.clienteName}</td>
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
      </div>

      <div className='btnIcone'>
        <Link to="/Cliente/Busca">
          <button>voltar</button>
        </Link>
      </div>

      <h1 className='titulo tituloPersonalizado'>Dispositivos:</h1>


      <div className='tabela-scroll'>


        <table className="tabela">
          <thead>
            <tr className="coluna">
              <th className="cabecalho">Código</th>
              <th className="cabecalho">Nome do dispositivo</th>
              <th className="cabecalho">Marca</th>
              <th className="cabecalho">Modelo</th>
              <th className="cabecalho">Cor</th>
              <th className="cabecalho">Serial</th>
              <th className="cabecalho">Descrição</th>
            </tr>
          </thead>

          <tbody className='conteudo'>
            {cliente?.dispositivos.map((dispositivo) => (
              <tr className="coluna" key={dispositivo.dispositivoId}>
                <td className="celula">{cliente?.clienteId}</td>
                <td className='celula' >{dispositivo.dispositivoName} </td>
                <td className='celular'>{dispositivo.marca} </td>
                <td className='celula'>{dispositivo.modelo} </td>
                <td className='celular'>{dispositivo.cor} </td>
                <td className='celula'> {dispositivo.serial}</td>
                <td className='celula'> {dispositivo.descricao}</td>

              </tr>
            ))}


          </tbody>

        </table >
      </div>
    </section >

  )

}

export default BuscaCodigo
