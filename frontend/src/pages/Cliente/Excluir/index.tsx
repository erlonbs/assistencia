import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';



function Excluir() {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [cliente, setCliente] = useState('')


  const BASE = `${BASE_URL}/clientes`

  const handleDelete = async () => {

    try {
      const response = await axios.delete(`${BASE}/${id}`);
      console.log('cliente excluído com sucesso!', cliente)
      setCliente(response.data.name)
      setMensagem(`Cliente com Id '  ${id} ${response.data}'  excluído com sucesso!`)
      setId('')
    } catch (error) {
      console.error('Não foi possível excluir:', error)
      setMensagem(`Erro ao excluir o cliente ${id} verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    <main className="containerCliente excluirCliente">

        <h1 className='titulo '>Excluir Clientes</h1>
        
      <div className='containerForm' >
        <label className='tituloEntrada'>Insira cliente a ser excluído:</label>
        <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value)} />
        <div className='btnIcone'>
          <button onClick={handleDelete}>Excluir</button>
        </div>

        <ExibirMensagem  mensagem={mensagem}/>
 
      </div>
      <div className="btnIcone">
        <Link to="/Cliente/">
          <button>voltar</button>
        </Link>
      </div>
    </main>
  )
}
export default Excluir
