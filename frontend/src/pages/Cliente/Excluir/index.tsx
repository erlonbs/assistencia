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
      setMensagem(`Erro ao excluir o cliente ${id} "" + verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    <section className="containerCliente">
      <h1>Excluir Clientes</h1>

      <div className="busca">
        <label htmlFor="bt">Buscar todos clientes:</label>
        <form >
          <a href="/">
            <input type="button" value="Buscar" />
          </a>
        </form>
      </div>

      <h6>insira cliente a ser excluido:</h6>

      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleDelete}>Excluir id</button>

      {mensagem && <div className="mensagem" >{mensagem}</div>}


      <Link className="btnVoltar" to="/Cliente/1">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </section>
  )
}
export default Excluir
