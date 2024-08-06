import { BASE_URL } from 'utils/requests';
import './editarOrcamento.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Orcamentos } from 'types/orcamento'
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';




function EditarOrcamento() {
  const [orcamento, setOrcamento] = useState<Orcamentos>();
  const [orcamentoId, setOrcamentoId] = useState('');
  const [clienteName, setClienteName] = useState('');
  const [dispositivoId, setDispositivoId] = useState('');
  const [dispositivoName, setDispositivoName] = useState('');
  const [defeito, setDefeito] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [autorizado, setAutorizado] = useState(false);
  const [mensagem, setMensagem] = useState('');


  useEffect(() => {
    if (orcamentoId) {

      axios.get(`${BASE_URL}/orcamentos/${orcamentoId}`).then(response => {
        console.log(response.data)
        if (response.data) {
          setOrcamento(response.data);
          setDispositivoId(response.data.dispositivoId)
          setClienteName(response.data.clienteName)
          setDefeito(response.data.defeito);
          setDescricao(response.data.descricao);
          setValor(response.data.valor);
          setAutorizado(response.data.autorizado)

        } else {
          setMensagem('dados não foram obtidos')
          console.log('dados não foram obtidos na requisção')
        }
      }).catch(error => {
        setMensagem('Código não existe')
        console.log(error)
      })
    } else {

    }

  }, [orcamentoId]);

  const BASE = `${BASE_URL}/orcamentos/${orcamentoId}`


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosEditar = { dispositivoId: dispositivoId, clienteName: clienteName, dispositivoName: dispositivoName,
       defeito: defeito, descricao: descricao, valor: valor, autorizado: autorizado }


    try { 
      await axios.put(BASE, dadosEditar)
      setMensagem('Editado orcamento!')
    } catch {
      setMensagem('Não foi possível editar:')
    }
  }

  const handleCheckboxChange = () => {
    setAutorizado(!autorizado)
  };

  return (
    <section className="containerOrcamento editarOrcamento">
      <h1 className="titulo">Editar orçamento</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="nome">Codigo Orçamento:</label>
        <input className='inputForm'
          type="text"
          value={orcamento?.orcamentoId}
          placeholder='Código do orçamento'
          onChange={e => setOrcamentoId(e.target.value)}
        />


         <label htmlFor="clienteName">Nome do Cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteName}

          onChange={e => setClienteName(e.target.value)}
        />

        <label htmlFor="codigoDispositivo">Código do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoId}

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

          value={defeito}
          onChange={e => setDefeito(e.target.value)}
        />

        <label htmlFor="descricao">Descrição:</label>
        <input className='inputForm'
          type="text"

          value={descricao}
          onChange={e => setDescricao(e.target.value)} />

        <label htmlFor="valor">Valor:</label>
        <input className='inputForm'
          type="text"
          placeholder={`${valor}`}
          value={valor}
          onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Autorizado:</label>
        <input className='inputForm'
          type="checkbox"
          checked={autorizado}

          onChange={handleCheckboxChange}
        />
        <div className='btnIcone'>
          <button type="submit">Editar</button>

        </div>

        <ExibirMensagem mensagem={mensagem} />
      </form>

      <Link to={`/orcamento/`} className="btnIcone">
        <button type="button" >Voltar</button>
      </Link>

    </section>
  )
}

export default EditarOrcamento
