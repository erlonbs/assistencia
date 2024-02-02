import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirServico.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



function ExcluirServico() {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [servico, setServico] = useState('')


  const BASE = `${BASE_URL}/servicos`

  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${BASE}/${id}`);
      console.log('Orçamento excluído com sucesso!', servico)
      setServico(response.data.name)
      setMensagem(`Servico com Id '  ${id} ${response.data}'  excluído com sucesso!`)
      setId('')
    } catch (error) {
      console.error('Não foi possível excluir:', error)
      setMensagem(`Erro ao excluir o serviço ${id} "" + verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    
    <main className="containerServico">
      <h1 className='titulo'>Excluir Serviços</h1>

    

      <h6>insira a Ordem de Serviço a ser excluida:</h6>

      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleDelete}>Excluir id</button>

      {mensagem && <div className="mensagem" >{mensagem}</div>}

      <div>
        <Link to={"/Servico/1"} className="voltar">
         
            <input className='inputForm' type="button" value="Voltar" />
          
        </Link>
      </div>
    </main>
  )
}
export default ExcluirServico
