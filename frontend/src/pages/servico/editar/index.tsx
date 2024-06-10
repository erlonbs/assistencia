import { BASE_URL } from 'utils/requests';
import './editarServico.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function EditarOrdemServico() {

  const [servicoId, setServicoId] = useState('')
  const [codigoOrcamento, setCodigoOrcamento] = useState('');
  const [clienteName, setClienteName] = useState('');

  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [servicoRealizado, setServicoRealizado] = useState('')
  const [pagamento, setPagamento] = useState(Boolean)
  const [clienteId, setClienteId] = useState('')


  useEffect(() => {

    axios.get(`${BASE_URL}/servicos/${servicoId}`).then(response => {
      setCodigoOrcamento(response.data.codigoOrcamento);
      setClienteName(response.data.clienteName);
      setValor(response.data.valor);
      setDescricao(response.data.descricao);
      setServicoRealizado(response.data.servicoRealizado);
      setPagamento(response.data.pagamento);
      setClienteId(response.data.clienteId);

    })

  }, [servicoId]);

  const BASE = `${BASE_URL}/servicos/${servicoId}`


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosEditar = { codigoOrcamento, clienteName, descricao, valor, servicoRealizado, pagamento, clienteId }


    try {
      const response = await axios.put(BASE, dadosEditar)
      console.log('Editado serviço!', response.data)
    } catch (error) {
      console.error('Não foi possível editar:', error)
    }
  }

  const handleCheckboxChange = () => {
    setPagamento(!pagamento)
  };

  return (
    <section className="containerServico containerEditarServico">
      <h1 className="titulo">Editar Ordem de Serviço</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="nome">Codigo do serviço:</label>
        <input className='inputForm'
          type="text"
          value={servicoId}
          onChange={e => setServicoId(e.target.value)}
        />

        <label htmlFor="codigoDispositivo">Código do Orcamento:</label>
        <input className='inputForm'
          type="text"
          value={codigoOrcamento}
          onChange={e => setCodigoOrcamento(e.target.value)}
        />

        <label htmlFor="clienteName">Nome do cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteName}
          onChange={e => setClienteName(e.currentTarget.value)}
        />


        <label htmlFor="descricao">Descrição:</label>
        <input className='inputForm'
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.currentTarget.value)} />

        <label htmlFor="valor">Valor:</label>
        <input className='inputForm'
          type="text"
          value={valor}
          onChange={e => setValor(e.currentTarget.value)}
        />

        <label htmlFor="servicoRealizado">Serviço realizado:</label>
        <input className='inputForm'
          type="text"
          value={servicoRealizado}
          onChange={e => setServicoRealizado(e.target.value)}
        />

        <label htmlFor="pagamento">Pagamento:</label>
        <input className='inputForm'
          type="checkbox"
          checked={pagamento}

          onChange={handleCheckboxChange}
        />
        <div className='btnIcone'>
          <button type="submit">Editar</button>
        </div>
      </form>

      <div className="btnIcone">
        <Link to={`/servico`} >
          <button type="button" >Voltar</button>
        </Link>
      </div>

    </section >
  )
}

export default EditarOrdemServico
