import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirServico.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';
import { Servicos } from 'types/servico';



function ExcluirServico() {
  const [servicoId, setServicoId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] = useState<'sucesso' | 'erro'>('erro')
  const [servico, setServico] = useState<Servicos>()


  const BASE = `${BASE_URL}/servicos`

  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${BASE}/${servicoId}`);
     
      setServico(response.data.clienteName)
      setMensagem(`Servico do cliente ${servico?.clienteName}  excluído com sucesso!`)
      setMensagemTipo('sucesso')
      setServicoId('')
    } catch (error) {
      console.error('Não foi possível excluir:', error)
      setMensagem(`Erro ao excluir o serviço ${servicoId}  verifique e tente novamente!`)
      setMensagemTipo('erro')
      setServicoId('')
    }
  }

  return (

    <main className="containerServico excluirServico">
      <h1 className='titulo'>Excluir Serviços</h1>

      <div className='containerForm'>

        <label>insira a Ordem de Serviço a ser excluida:</label>

        <input className='inputForm' type="text" value={servicoId} onChange={e => setServicoId(e.target.value)} />
        <div className='btnIcone'>
          <button onClick={handleDelete}>Excluir </button>
        </div>

        <ExibirMensagem mensagem= {mensagem} mensagemType={mensagemTipo}/>
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
