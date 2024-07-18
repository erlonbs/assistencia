import { BASE_URL } from 'utils/requests';
import './novoServico.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';
import { Orcamentos } from 'types/orcamento';


function NovaOrdemServico() {

  const [orcamento,setOrcamento]= useState<Orcamentos>();
  const [codigoOrcamento, setCodigoOrcamento] = useState('');
  const [orcamentoAutorizado, setOrcamentoAutorizado] = useState('');
  const [clienteName, setClienteName] = useState('');
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [servicoRealizado, setServicoRealizado] = useState('');
  const [pagamento, setPagamento] = useState(Boolean)
  const [clienteId, setClienteId] = useState('');
  const [dispositivoId, setDispositivoId] = useState('');
  const [mensagem, setMensagem] = useState('');


  const BASE = `${BASE_URL}/servicos`

  useEffect(() => {
    if (codigoOrcamento) {

      axios.get(`${BASE_URL}/orcamentos/${codigoOrcamento}`).then(response => {
        console.log(response.data)
        setOrcamento(response.data)
        setOrcamentoAutorizado(response.data.autorizado)
        setClienteName(response.data.clienteName);
        setValor(response.data.valor);
        setDescricao(response.data.descricao);
        setClienteId(response.data.clienteId);
        setDispositivoId(response.data.dispositivoId);
        setMensagem(`Orcamento de ${response.data.clienteName}`)
        if(!response.data.autorizado){
          setMensagem(` O cliente ${response.data.clienteName} ainda não autorizou o serviço!`)
        }else {
          setMensagem(`O Cliente ${response.data.clienteName} autoriza o serviço!`)
        }
      })
        .catch(error => {

          console.error('Verifique se o cliente autorizou o serviço', error);

        })
    }
  }, [codigoOrcamento]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { codigoOrcamento, clienteName, descricao, servicoRealizado, valor, pagamento, clienteId, dispositivoId }

    try {
      const response = await axios.post(BASE, dadosNovo)
      if (response && orcamentoAutorizado) {

        setMensagem('Nova ordem de serviço criada com sucesso!')
        limpaCampos()
      
      } else {
        setMensagem('Erro! verifique os dados digitados ou se o cliente autorizou o serviço!')
      }

    } catch (error) {
      setMensagem('Não foi possível criar nova ordem de serviço, verifique os dados e tente novamente!')
    
    }

  }

  const handleCheckboxChange = () => {
    setPagamento(!pagamento)

  };


  function limpaCampos() {
    setCodigoOrcamento('');
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
      <ExibirMensagem mensagem={mensagem} />
      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="codigoOrcamento">Código do Orçamento:</label>
        <input className='inputForm'
          type="text"
          value={codigoOrcamento}
          placeholder='Código do orçamento'
          required
          onChange={e => setCodigoOrcamento(e.target.value)}
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
          type="text"
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
        <ExibirMensagem mensagem={mensagem} />
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
