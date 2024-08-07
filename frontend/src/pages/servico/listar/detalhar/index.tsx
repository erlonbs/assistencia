import axios from 'axios'
import './detalhar.css'
import { BASE_URL } from 'utils/requests'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Servicos } from 'types/servico'
import { Clientes } from 'types/cliente'
import { Dispositivos } from 'types/dispositivo'
import ExibirMensagem from 'components/Mensagem/mensagem'



function DetalharOrdemServico() {

  const { id } = useParams();

  const [servico, setServico] = useState<Servicos>()
  const [cliente, setCliente] = useState<Clientes>();
  const [clienteId, setClienteId] = useState('')
  const [dispositivo, setDispositivo] = useState<Dispositivos>()
  const [dispositivoId, setDispositivoId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] = useState<'sucesso'| 'erro'>('erro')

  useEffect(() => {
      if(id)
    axios.get(`${BASE_URL}/servicos/${id}`).then(response => {
      setServico(response.data)
      setClienteId(response.data.clienteId)
      setDispositivoId(response.data.dispositivoId) 
     
    }).catch(error =>{
      console.log(  'esta dando erro',error)
      setMensagem('Não foi possivel acessar')
      setMensagemTipo('erro')
    })
  }, [id])

  useEffect(() => {
    if(clienteId){      
    
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)         
     
    }).catch(error=>{

      setMensagem('Não foi possível exibir!')
      setMensagemTipo('erro')
    })
    }
  
  }, [clienteId])

  useEffect(() => {  

    axios.get(`${BASE_URL}/dispositivos/${dispositivoId}`).then(response => {
      setDispositivo(response.data)
    
    }).catch(error =>{
      setMensagem(`Não foi possivel acessar o dispoistivo ${error}`)
      setMensagemTipo('erro')
    })
  }, [dispositivoId])

  return (
    <section className='containerServicoDetalhar'>
      <div className='context-titulo'>

        <h1 className='titulo'>Detalhes da ordem de serviço:</h1>
        <span className='numero-ordem'>OS: {servico?.servicoId}</span>
      </div>
      <h2 >Dados do cliente:</h2>
        <ExibirMensagem mensagem = {mensagem} mensagemType={mensagemTipo}/>
      <div className='detalhesCliente'>

        <div className='detalhesClientesItens'>

          <p  className='detalharNome'><b>Código: </b> {cliente?.clienteId}</p>
          <p  className='detalharNome'><b>Nome do cliente: </b> {cliente?.clienteName}</p>
          <p  className='detalharNome'><b>Endereço: </b> {cliente?.address}</p>
          <p  className='detalharNome'><b>Telefone: </b>: {cliente?.telephone}</p>
          <p  className='detalharNome'><b>Cpf: </b> {cliente?.cpf}</p>
        </div>
        <div >
        </div>
      </div>

      <h2>Dados do dispositivo:</h2>

      <div className='detalhesDispositivo'>

        <p className='detalharNome'><b>Código: </b>{dispositivo?.dispositivoId} </p>
        <p className='detalharNome'><b>Nome do dispositivo: </b>{dispositivo?.dispositivoName}</p>
        <p className='detalharNome'><b>Marca: </b> {dispositivo?.marca}</p>
        <p className='detalharNome'><b>Modelo: </b> {dispositivo?.modelo}</p>
        <p className='detalharNome'><b>Cor: </b> {dispositivo?.cor}</p>
        <p className='detalharNome'><b>Serial: </b>{dispositivo?.serial}</p>
        <p className='detalharNome'><b>Descrição: </b> {dispositivo?.descricao}</p>

      </div>

      <h2>Dados do serviço:</h2>

      <div className='detalhesServico'>
        <p className='detalharNome'><b>Número da ordem: </b>{servico?.servicoId}</p>
        <p className='detalharNome'><b>Código do orçamento: </b>{servico?.orcamentoId}</p>
        <p className='detalharNome'><b>Código do cliente: </b>{servico?.clienteId}</p>
        <p className='detalharNome'><b>Código  do Dispositivo: </b>{servico?.dispositivoId}</p>
        <p className='detalharNome'><b>Defeito: </b>{servico?.descricao}</p>
        <p className='detalharNome'><b>Serviço realizado: </b> {servico?.servicoRealizado}</p>
        <p className='detalharNome'><b>Valor: </b> {servico?.valor}</p>
        <p className='detalharNome'><b>Pagamento: </b> {servico?.pagamento ? 'Sim' : 'Não'}</p>
        <p className='detalharNome'><b>Status da ordem: </b> {servico?.pagamento ? 'aguardando' : 'finalizado'}</p>

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
