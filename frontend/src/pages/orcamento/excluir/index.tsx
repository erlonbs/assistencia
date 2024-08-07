import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirOrcamento.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';



function ExcluirOrcamento() {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] =useState<'sucesso'| 'erro'>('erro')
  const [orcamento, setOrcamento] = useState('')


  const BASE = `${BASE_URL}/orcamentos`

  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${BASE}/${id}`);
      console.log('Orçamento excluído com sucesso!', orcamento)
      
      setOrcamento(response.data.name)
      setMensagem(`Orçamento com código:'  ${id} ${response.data}'  excluído com sucesso!`)
      setMensagemTipo('sucesso')
      setId('')
    } catch (error) {
     
      setMensagem(`Erro ao excluir com o valor digitado ${id} verifique e tente novamente!`)
      setMensagemTipo('erro')
      setId('')
    }
  }

  return (
    <main className="containerOrcamento excluirContainer">
      <h1 className='titulo'>Excluir Orçamentos</h1>
      <div className='containerForm'>

        <label className='tituloEntrada'>insira o Orçamento a ser excluido:</label>

        <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value)} />
        <div className='btnIcone'>
          <button onClick={handleDelete}>Excluir id</button>
        </div>

        <ExibirMensagem mensagem ={mensagem} mensagemType={mensagemTipo}/>
      </div>


      <div className='btnIcone'>
        <Link to="/orcamento/">
          <button type="submit">Voltar</button>
        </Link>
      </div>
    </main>
  )
}
export default ExcluirOrcamento
