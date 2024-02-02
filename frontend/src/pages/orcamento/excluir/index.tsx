import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirOrcamento.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



function ExcluirOrcamento() {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [orcamento, setOrcamento] = useState('')


  const BASE = `${BASE_URL}/orcamentos`

  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${BASE}/${id}`);
      console.log('Orçamento excluído com sucesso!', orcamento)
      setOrcamento(response.data.name)
      setMensagem(`Orçamento com Id '  ${id} ${response.data}'  excluído com sucesso!`)
      setId('')
    } catch (error) {
      console.error('Não foi possível excluir:', error)
      setMensagem(`Erro ao excluir o orçamento ${id} "" + verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    <main className="excluirContainer">
      <h1 className='titulo'>Excluir Orçamentos</h1>

      <h6>insira o Orçamento a ser excluido:</h6>

      <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleDelete}>Excluir id</button>

      {mensagem && <div className="mensagem" >{mensagem}</div>}

      <div>
        <Link to={"/Orcamento/1"} className="voltar">

          <input type="button" value="Voltar" />

        </Link>
      </div>
    </main>
  )
}
export default ExcluirOrcamento
