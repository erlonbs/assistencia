import { BASE_URL } from 'utils/requests';
import './novoServico.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';
import { Orcamentos } from 'types/orcamento';


function NovaOrdemServico() {

  const [orcamento,setOrcamento]= useState<Orcamentos>();
  const [orcamentoId, setOrcamentoId] = useState('');
  const [orcamentoAutorizado, setOrcamentoAutorizado] = useState('');
  const [clienteName, setClienteName] = useState('');
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [servicoRealizado, setServicoRealizado] = useState('');
  const [pagamento, setPagamento] = useState(Boolean)
  const [clienteId, setClienteId] = useState('');
  const [dispositivoId, setDispositivoId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] = useState<'sucesso'| 'erro'>('erro')


  const BASE = `${BASE_URL}/servicos`

  useEffect(() => {
    if (orcamentoId !=='') {

      axios.get(`${BASE_URL}/orcamentos/${orcamentoId}`).then(response => {
        console.log(response.data)
        setOrcamento(response.data)       
        setOrcamentoId(response.data.orcamentoId)
        setOrcamentoAutorizado(response.data.autorizado)
        setClienteName(response.data.clienteName);
        setValor(response.data.valor);
        setDescricao(response.data.descricao);
        setClienteId(response.data.clienteId);
        setDispositivoId(response.data.dispositivoId);
        setMensagem(`Orcamento de ${response.data.clienteName}`)
        if(!response.data.autorizado){
          setMensagem(` O cliente ${response.data.clienteName} ainda não autorizou o serviço!`)
          setMensagemTipo('erro')
        }else {
          setMensagem(`O Cliente ${response.data.clienteName} autoriza o serviço!`)
          setMensagemTipo('sucesso')
        }
      })
        .catch(error => {

          setMensagem('Erro! Verifique se o cliente autorizou o serviço')
          setMensagemTipo('erro')

          console.error('Verifique se o cliente autorizou o serviço', error);

        })
    }
  }, [orcamentoId]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { orcamentoId, clienteName, descricao, servicoRealizado, valor, pagamento, clienteId, dispositivoId }

    try {
      if (orcamentoAutorizado) {
      const response = await axios.post(BASE, dadosNovo)
     

        setMensagem('Nova ordem de serviço criada com sucesso!')
        setMensagemTipo('sucesso')
        limpaCampos()
      
      } else {
        setMensagem('Erro! verifique os dados digitados ou se o cliente autorizou o serviço!')
        setMensagemTipo('erro')
      }

    } catch (error) {
      setMensagem('Não foi possível criar nova ordem de serviço, verifique os dados e tente novamente!')
      setMensagemTipo('erro')
    }

  }

  const handleCheckboxChange = () => {
    setPagamento(!pagamento)

  };


  function limpaCampos() {
    setOrcamentoId('');
    setClienteName('');
    setValor('');
    setDescricao('');
    setServicoRealizado('');
    setPagamento(false);
    setClienteId('');
    setDispositivoId('');

    setTimeout(() => {
      limpaCampos()
    }, 2000);


  }

  return (

    <main className="containerServico containerNovoServico ">
      <h1 className="titulo">Nova Ordem de Serviço</h1>
      <ExibirMensagem mensagem={mensagem} mensagemType={mensagemTipo} />
      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="codigoOrcamento">Código do Orçamento:</label>
        <input className='inputForm'
          type="text"
          value={orcamentoId}
          placeholder='Código do orçamento'
          required
          onChange={e => setOrcamentoId(e.target.value)}
        />

        <label htmlFor="orcamentoAutorizado">Orcamento autorizado:</label>
        <input className='inputForm'
          type="text"          
          value={orcamento?.autorizado ? 'Sim' : 'Não'.toString() }
          placeholder='Orcamento autorizado' 
          required
          onChange={e => setOrcamentoAutorizado(e.target.value)}
        />

        <label htmlFor="nomeDispositivo">Nome do Cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteName}
          readOnly
        />

        <label htmlFor="descricao">Descrição do orçamento:</label>
        <input className='inputForm'
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)} />

        <label htmlFor='servicoRealizado'>Serviço realizado:</label>
        <input className='inputForm'
          type="text"
          value={servicoRealizado}
          required
          onChange={e => setServicoRealizado(e.target.value)} />

        <label htmlFor="valor">Valor do Serviço:</label>
        <input className='inputForm'
          type="number"
          step={0.01}
          name='quantity'
          min={0.01}
          value={valor}
          required
          onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Pagamento:</label>
        <input className='inputForm'
          type="checkbox"
          checked={pagamento}         
          onChange={handleCheckboxChange}
        />

        <label htmlFor="valor">Código do cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteId}
          required
          onChange={e => setClienteId(e.target.value)}
        />

        <label htmlFor="valor">Código do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoId}
          required
          onChange={e => setDispositivoId(e.target.value)}
        />
        <div className='btnIcone'>
          <button type="submit">Inserir</button>
        </div>
        <ExibirMensagem mensagem={mensagem} mensagemType={mensagemTipo} />
      </form>

      <div className='btnIcone'>
        <Link className="voltar" to="/Servico">
          <button>Voltar</button>
        </Link>
      </div>
    </main>

  )
}

export default NovaOrdemServico
