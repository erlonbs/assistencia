import { BASE_URL } from 'utils/requests';
import './novoOrcamento.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Clientes}  from 'types/cliente';



function NovoOrcamento() {

  const [dispositivoId, setDispositivoId] = useState('');
  const [dispositivoName, setDispositivoName] = useState('');
 
  const [defeito, setDefeito] = useState('')
  const [valor, setValor] = useState('')
  const [descricao, setDescricao] = useState('')  
  const [autorizado, setAutorizado] = useState(Boolean)
  const [clienteId, setClienteId] = useState('');


  useEffect(() => {
    if (dispositivoId) {

      axios.get(`${BASE_URL}/dispositivos/${dispositivoId}`).then(response => {
        console.log(response.data)
        if(response.data){
          setDispositivoName(response.data.dispositivoName);
         
         setClienteId(response.data.clienteId);
        }
        else {
          console.error("a resposta não contem o dado")
        }
      })
        .catch(error => {
          console.error('erro ao obter dados do dispositivo', error);
        })
    } else {
      setDispositivoName('');
    }

  }, [dispositivoId]);


  const BASE = `${BASE_URL}/orcamentos/`

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { dispositivoId, dispositivoName, defeito, descricao, valor, autorizado ,clienteId }


    try {
      const response = await axios.post(BASE, dadosNovo)
      console.log('Novo orcamento inserido!', response.data)
    } catch (error) {
      console.error('Não foi possível inserir o orçamento:', error)
    }
  }

  const handleCheckboxChange = () => {
    setAutorizado(!autorizado)
  };

  return (
    <div className="containerOrcamento">
      <h1 className="titulo">Novo orçamento</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="codigoDispositivo">Código do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoId}
         
          onChange={e => setDispositivoId(e.target.value)}
        />

        <label htmlFor="nomeDispositivo">Nome do dispositivo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoName}
          readOnly
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
          value={valor}
          onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Autorizado:</label>
        <input className='inputForm'
          type="checkbox"
          checked={autorizado}
        
         onChange={handleCheckboxChange}
        />

<label htmlFor="defeito">Código do cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteId}
          onChange={e => setClienteId(e.target.value)}
        />

        

        <button type="submit">Inserir</button>
      </form>

      <form className="btnVoltar">
        <a href="/Orcamento/1">

          <input type="button" value="Voltar " />
        </a>
      </form>
    </div>
  )
}

export default NovoOrcamento
