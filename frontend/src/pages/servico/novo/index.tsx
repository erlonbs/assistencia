import { BASE_URL } from 'utils/requests';
import './novoServico.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function NovaOrdemServico() {

  const [codigoOrcamento, setCodigoOrcamento] = useState('');
  const [clienteName, setClienteName] = useState('');
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [servicoRealizado, setServicoRealizado] = useState('');
  const [pagamento, setPagamento] = useState(Boolean)
  const [clienteId, setClienteId] = useState('');
  const [dispositivoId, setDispositivoId] = useState('');

  useEffect(() => {
    if (codigoOrcamento) {

      axios.get(`${BASE_URL}/orcamentos/${codigoOrcamento}`).then(response => {
        setClienteName(response.data.clienteName);
        console.log(response.data);
        setValor(response.data.valor);
        setDescricao(response.data.descricao);
        setClienteId(response.data.clienteId);
        setDispositivoId(response.data.dispositivoId);
      })
        .catch(error => {
          console.error('erro ao obter dados do orcamento', error);
        })
    } else {
      setClienteName('');
    }

  }, [codigoOrcamento]);


  const BASE = `${BASE_URL}/servicos`


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { codigoOrcamento, clienteName, descricao, servicoRealizado, valor, pagamento, clienteId, dispositivoId }

    try {
      const response = await axios.post(BASE, dadosNovo)
      console.log('Nova ordem inserida!', response.data)
    } catch (error) {
      console.error('Não foi possível inserir a ordem de serviço:', error)
    }
  }

  const handleCheckboxChange = () => {
    setPagamento(!pagamento)
  };

  return (


    <main className="containerServico containerNovoServico ">
      <h1 className="titulo">Nova Ordem de Serviço</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="codigoOrcamento">Código do Orçamento:</label>
        <input className='inputForm'
          type="text"
          value={codigoOrcamento}
          placeholder='Código do orçamento'

          onChange={e => setCodigoOrcamento(e.target.value)}
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
          onChange={e => setServicoRealizado(e.target.value)} />

        <label htmlFor="valor">Valor do Serviço:</label>
        <input className='inputForm'
          type="text"
          value={valor}
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
          onChange={e => setClienteId(e.target.value)}
        />

        <label htmlFor="valor">Código do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoId}
          onChange={e => setDispositivoId(e.target.value)}
        />
        <div className='btnIcone'>
        <button type="submit">Inserir</button>
        </div>
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
