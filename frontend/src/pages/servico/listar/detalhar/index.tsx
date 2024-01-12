import axios from 'axios'
import './detalhar.css'


import { BASE_URL } from 'utils/requests'

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import { Servicos } from 'types/servico'
import { Clientes } from 'types/cliente'

import { Dispositivos } from 'types/dispositivo'


function DetalharOrdemServico() {

  const { id } = useParams();


  const [servico, setServico] = useState<Servicos>()

  const [cliente, setCliente] = useState<Clientes>();
  const [clienteId, setClienteId] = useState('');

  const [dispositivo, setDispositivo] = useState<Dispositivos>()
  const [dispositivoId, setDispositivoId] = useState('');


  useEffect(() => {

    axios.get(`${BASE_URL}/servicos/${id}`).then(response => {
      setServico(response.data)
      setClienteId(response.data.clienteId)
      setDispositivoId(response.data.dispositivoId)

    })
  }, [id])

  useEffect(() => {

    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {

      setCliente(response.data)

    })
  }, [clienteId])

  useEffect(() => {

    axios.get(`${BASE_URL}/dispositivos/${dispositivoId}`).then(response => {

      setDispositivo(response.data)

    })
  }, [dispositivoId])


  return (
    <section className='containerServico'>
      <h1 className='titulo'>Destalhes da ordem de serviço:</h1>


      <table className='tabela'>
        <thead className='servicoDetalhar'>
          <tr className='coluna' >
            <th className='cabecalho'>Código</th>
            <th className='cabecalho'>Nome do cliente</th>
            <th className='cabecalho'>Endereço</th>
            <th className='cabecalho'>Telefone</th>
            <th className='cabecalho'>CPF</th>

          </tr>
        </thead>
        <tbody className='conteudo'>

          <tr className='coluna' key={cliente?.clienteId}>
            <td className='celula'>{cliente?.clienteId}</td>
            <td className='celula'>{cliente?.clienteName}</td>
            <td className='celula'>{cliente?.address}</td>
            <td className='celula'>{cliente?.telephone}</td>
            <td className='celula'>{cliente?.cpf}</td>
          </tr>

        </tbody>
      </table>

      <table className='tabela'>
        <thead className='servicoDetalhar'>
          <tr className='coluna' >
            <th className='cabecalho'>Código </th>
            <th className='cabecalho'>Nome do dispositivo</th>
            <th className='cabecalho'>Marca</th>
            <th className='cabecalho'>Modelo</th>
            <th className='cabecalho'>Cor</th>
            <th className='cabecalho'>Serial</th>
            <th className='cabecalho'>Descrição</th>
          </tr>
        </thead>
        <tbody className='conteudo'>

          <tr className='coluna' key={dispositivo?.dispositivoId}>
            <td className='celula'>{dispositivo?.dispositivoId}</td>
            <td className='celula'>{dispositivo?.dispositivoName}</td>
            <td className='celula'>{dispositivo?.marca}</td>
            <td className='celula'>{dispositivo?.modelo}</td>
            <td className='celula'>{dispositivo?.cor}</td>
            <td className='celula'>{dispositivo?.serial}</td>
            <td className='celula'>{dispositivo?.descricao}</td>
          </tr>

        </tbody>
      </table>

      <table className='tabela'>
        <thead className='servicoDetalhar'>
          <tr className='coluna' >
            <th className='cabecalho'>Número da ordem</th>
            <th className='cabecalho'>Código do orçamento</th>         
            <th className='cabecalho'>Código  do Cliente</th>
            <th className='cabecalho'>Código  do Dispositivo</th>
            <th className='cabecalho'>Defeito</th>
            <th className='cabecalho'>Serviço realizado</th>
            <th className='cabecalho'>Valor</th>
            <th className='cabecalho'>Pagamento</th>
            <th className='cabecalho'>Status da ordem</th>

          </tr>
        </thead>
        <tbody className='conteudo'>

          <tr className='coluna' key={servico?.id}>
            <td className='celula'>{servico?.id}</td>
            <td className='celula'>{servico?.codigoOrcamento}</td>
   
            <td className='celula'>{servico?.clienteId}</td>
            <td className='celula'>{servico?.dispositivoId}</td>
            <td className='celula'>{servico?.descricao}</td>
            <td className='celula'>{servico?.servicoRealizado}</td>
            <td className='celula'>{servico?.valor}</td>
            <td className='celula'>{servico?.pagamento ? 'Sim' : 'Não'}</td>
            <td className='celula'>{servico?.pagamento ? 'aguardando' : 'finalizado'}</td>
          </tr>

        </tbody>
      </table>

      <Link className="voltar" to="/Servico/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </section >

  )

}

export default DetalharOrdemServico
