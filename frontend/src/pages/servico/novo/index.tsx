import { BASE_URL } from 'utils/requests';
import './novoServico.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Orcamentos } from 'types/orcamento';



function NovaOrdemServico() {

  const [codigoOrcamento, setCodigoOrcamento] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');

  const [valor, setValor] = useState(0)
  const [descricaoServico, setDescricaoServico] = useState('')  
  const [pagamento, setPagamento] = useState(Boolean)


  useEffect(() => {
    if (codigoOrcamento) {

      axios.get(`${BASE_URL}/orcamentos/${codigoOrcamento}`).then(response => {
        setNomeCliente(response.data.name);
      })
        .catch(error => {
          console.error('erro ao obter dados do orcamento', error);
        })
    } else {
      setNomeCliente('');
    }

  }, [codigoOrcamento]);


  const BASE = `${BASE_URL}/orcamentos/`

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dadosNovo = { codigoOrcamento, nomeCliente, descricaoServico, valor, pagamento }


    try {
      const response = await axios.post(BASE, dadosNovo)
      console.log('Novo orcamento inserido!', response.data)
    } catch (error) {
      console.error('Não foi possível inserir o orçamento:', error)
    }
  }

  const handleCheckboxChange = () => {
    setPagamento(!pagamento)
  };

  return (
    <div className="containerServico">
      <h1 className="titulo">Nova Ordem de Serviço</h1>

      <form className='containerForm' onSubmit={handleSubmit}>

        <label htmlFor="codigoOrcamento">Código do Orçamento:</label>
        <input className='inputForm'
          type="text"
          value={codigoOrcamento}
         
          onChange={e => setCodigoOrcamento(e.target.value)}
        />

        <label htmlFor="nomeDispositivo">Nome do Cliente:</label>
        <input className='inputForm'
          type="text"
          value={nomeCliente}
          readOnly
        />

      
        <label htmlFor="descricao">Serviço realizado:</label>
        <input className='inputForm'
         type="text" 
         value={descricaoServico}
          onChange={e => setDescricaoServico(e.target.value)} />

        <label htmlFor="valor">Valor do Serviço:</label>
        <input className='inputForm'
          type="text"
          value={valor}
       //   onChange={e => setValor(e.target.value)}
        />

        <label htmlFor="autorizado">Pagamento:</label>
        <input className='inputForm'
          type="checkbox"
          checked={pagamento}
        
         onChange={handleCheckboxChange}
        />

        <button type="submit">Inserir</button>
      </form>

      <form className="btnVoltar">
        <a href="/Servico/1">

          <input type="button" value="Voltar " />
        </a>
      </form>
    </div>
  )
}

export default NovaOrdemServico
