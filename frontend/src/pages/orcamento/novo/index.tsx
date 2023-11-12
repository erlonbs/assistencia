import { BASE_URL } from 'utils/requests';
import './novoOrcamento.css'
import axios from 'axios';
import React, { useState } from 'react';



 function NovoOrcamento() {
  const [defeito, setDefeito] = useState('')
  const [valor, setValor] = useState('')
  const [autorizado, setAutorizado] = useState('')
  const [descricao, setDescricao] = useState('')
  const [dispositivo, setDispositivo] = useState('')
 

  const BASE = `${BASE_URL}/orcamentos`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { defeito, valor, autorizado, descricao, dispositivo }

    try {
      const response = await axios.post(BASE, dadosNovo)
      console.log('Novo orcamento inserido!', response.data)
    } catch (error) {
      console.error('Não foi possível inserir o orçamento:', error)
    }
  }

  return (
    <div className="containerOrcamento">
      <h1 className="titulo">Novo orçamento</h1>

      <form className='containerForm' onSubmit={handleSubmit}>
        <label htmlFor="defeito">Defeito:</label>
        <input
          type="text"
          value={defeito}
          onChange={e => setDefeito(e.target.value)}
        />

        <label htmlFor="valor">Valor:</label>
        <input
          type="text"
          value={valor}
          onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Autorizado:</label>
        <input
          type="text"
          value={autorizado}
          onChange={e => setAutorizado(e.target.value)}
        />

        <label htmlFor="descricao">Descrição:</label>
        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />

        <label htmlFor="dispositivo">Dispositivo:</label>
        <input type="text" value={dispositivo} onChange={e => setDispositivo(e.target.value)} />
        

        

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
