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

    <main className="containerServico excluirServico">
      <h1 className='titulo'>Excluir Serviços</h1>

      <div className='containerForm'>

        <label>insira a Ordem de Serviço a ser excluida:</label>

        <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value)} />
        <div className='btnIcone'>
          <button onClick={handleDelete}>Excluir id</button>
        </div>

        {mensagem && <div className="mensagem" >{mensagem}</div>}

      </div>


      <div className="btnIcone">
        <Link to={`/servico`} >
          <button type="button" >Voltar</button>
        </Link>
      </div>
    </main>
  )
}
export default ExcluirServico
