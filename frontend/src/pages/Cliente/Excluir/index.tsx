import { useState } from 'react'
import { BASE_URL } from 'utils/requests'
import './styles.css'
import axios from 'axios';
import { Link } from 'react-router-dom';



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
    <main className="containerExcluirCliente">
      <h1 className='titulo'>Excluir Clientes</h1>
  
      <label>Insira cliente a ser excluído:</label>

      <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleDelete}>Excluir</button>

      {mensagem && <div className="mensagem" >{mensagem}</div>}


      <Link className="btnVoltar" to="/Cliente/1">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </main>
  )
}
export default Excluir
