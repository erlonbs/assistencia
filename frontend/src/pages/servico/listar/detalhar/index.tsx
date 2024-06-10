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
    <section className='containerServicoDetalhar'>
      <div className='context-titulo'>

        <h1 className='titulo'>Detalhes da ordem de serviço:</h1>
        <span className='numero-ordem'>OS: {servico?.id}</span>
      </div>
      <h2 >Dados do cliente:</h2>

      <div className='detalhesCliente'>

        <div className='detalhesClientesItens'>

          <p ><b>Código: </b> {cliente?.clienteId}</p>
          <p ><b>Nome do cliente: </b> {cliente?.clienteName}</p>
          <p ><b>Endereço: </b> {cliente?.address}</p>
          <p ><b>Telefone: </b>: {cliente?.telephone}</p>
          <p ><b>Cpf: </b> {cliente?.cpf}</p>
        </div>
        <div >
        </div>
      </div>

      <h2>Dados do dispositivo:</h2>

      <div className='detalhesDispositivo'>

        <p className=''><b>Código: </b>{dispositivo?.dispositivoId} </p>
        <p className=''><b>Nome do dispositivo: </b>{dispositivo?.dispositivoName}</p>
        <p className=''><b>Marca: </b> {dispositivo?.marca}</p>
        <p className=''><b>Modelo: </b> {dispositivo?.modelo}</p>
        <p className=''><b>Cor: </b> {dispositivo?.cor}</p>
        <p className=''><b>Serial: </b>{dispositivo?.serial}</p>
        <p className=''><b>Descrição: </b> {dispositivo?.descricao}</p>

      </div>


      <h2>Dados do serviço:</h2>

      <div className='detalhesServico'>
        <p className=''><b>Número da ordem: </b>{servico?.id}</p>
        <p className=''><b>Código do orçamento: </b>{servico?.codigoOrcamento}</p>
        <p className=''><b>Código do cliente: </b>{servico?.clienteId}</p>
        <p className=''><b>Código  do Dispositivo: </b>{servico?.dispositivoId}</p>
        <p className=''><b>Defeito: </b>{servico?.descricao}</p>
        <p className=''><b>Serviço realizado: </b> {servico?.servicoRealizado}</p>
        <p className=''><b>Valor: </b> {servico?.valor}</p>
        <p className=''><b>Pagamento: </b> {servico?.pagamento ? 'Sim' : 'Não'}</p>
        <p className=''><b>Status da ordem: </b> {servico?.pagamento ? 'aguardando' : 'finalizado'}</p>

      </div>
      <div className='botoesDetalhar'>

        <div className='btnIcone'>
          <Link  to="/Servico/listar">
            <button>Voltar</button>
          </Link>
        </div>
        <div className='btnIcone'>
          <Link to="/Servico/listar">
            <button>Finalizar</button>
          </Link>
        </div>
        <div className='btnIcone'>
          <Link  to="/Servico/listar">
            <button>Imprimir</button>
          </Link>
        </div>
        <div className='btnIcone'>
          <Link  to="/Servico/listar">
            <button>Baixar PDF</button>
          </Link>
        </div>
      </div>
    </section >

  )

}

export default DetalharOrdemServico
