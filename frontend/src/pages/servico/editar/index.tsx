import { BASE_URL } from 'utils/requests';
import './editarOrcamento.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Orcamentos } from 'types/orcamento'
import { Link } from 'react-router-dom';



function EditarOrcamento() {
  const [orcamento, setOrcamento] = useState<Orcamentos>()
  const [orcamentoId, setOrcamentoId] = useState('');
  const [dispositivoId, setDispositivoId] = useState('');
  const [dispositivoName, setDispositivoName] = useState('');
  const [defeito, setDefeito] = useState('')
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [autorizado, setAutorizado] = useState(Boolean)


  useEffect(() => {

    axios.get(`${BASE_URL}/orcamentos/${orcamentoId}`).then(response => {
      setOrcamento(response.data);
    })

  }, [orcamentoId]);

  const BASE = `${BASE_URL}/orcamentos/${orcamentoId}`


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosEditar = { dispositivoId, dispositivoName, defeito, descricao, valor, autorizado }


    try {
      const response = await axios.put(BASE, dadosEditar)
      console.log('Editado orcamento!', response.data)
    } catch (error) {
      console.error('Não foi possível editar:', error)
    }
  }

  const handleCheckboxChange = () => {
    setAutorizado(!autorizado)
  };

  return (
    <div className="containerOrcamento">
      <h1 className="titulo">Editar orçamento</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="nome">Codigo Orçamento:</label>
        <input
          type="text"
          value={orcamentoId}
          onChange={e => setOrcamentoId(e.target.value)}
        />

        <label htmlFor="codigoDispositivo">Código do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={orcamento?.dispositivoId}

          onChange={e => setDispositivoId(e.target.value)}
        />

        <label htmlFor="nomeDispositivo">Nome do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={orcamento?.dispositivoName}
       
        onChange={e => setDispositivoName(e.target.value)}
        />

        <label htmlFor="defeito">Defeito:</label>
        <input className='inputForm'
          type="text"
          placeholder={orcamento?.defeito}
          value={defeito}
          onChange={e => setDefeito(e.target.value)}
        />

        <label htmlFor="descricao">Descrição:</label>
        <input className='inputForm'
          type="text"
          placeholder={orcamento?.descricao}
          value={descricao}
          onChange={e => setDescricao(e.target.value)} />

        <label htmlFor="valor">Valor:</label>
        <input className='inputForm'
          type="text"
          placeholder={`${orcamento?.valor}`}
          value={valor}
          onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Autorizado:</label>
        <input className='inputForm'
          type="checkbox"         
          checked={autorizado}

          onChange={handleCheckboxChange}
        />

        <button type="submit">Editar</button>
      </form>

      <Link to ={`/orcamento/1`} className="btnVoltar">
        
          <button type="button" >Voltar</button>" 
      </Link>
    </div>
  )
}

export default EditarOrcamento
