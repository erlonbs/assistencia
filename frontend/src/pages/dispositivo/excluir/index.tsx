import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirDispositivo.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExibirMensagem from 'components/Mensagem/mensagem';


function ExcluirDispositivo() {
const [id, setId] = useState('');
const [mensagem, setMensagem] = useState('');
const[dispositivo, setDispositivo] = useState('')


  const BASE = `${BASE_URL}/dispositivos`
 
  const handleDelete = async () => {
         
    try {
      const response = await axios.delete(`${BASE}/${id}`);     
      setDispositivo(response.data)
      setMensagem(`Dispositivo com Id  ${id} ${response.data}excluído com sucesso!`)
      setId('')
    } catch (error) {
    
      setMensagem(`Erro ao excluir o cliente ${id} "" + verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    <section className="containerDispositivo excluirDispositivo">
      <h1 className='titulo'>Excluir Dispositivos</h1>

      <div className='containerForm'>

        <label className='tituloEntrada'>insira o dispositivo a ser excluido:</label>    
      
            <input className='inputForm' type="text" value={id} onChange={e => setId(e.target.value) }/>

            <div className='btnIcone'>
            <button onClick={handleDelete}>Excluir id</button>
            </div>
            <ExibirMensagem mensagem={mensagem}/>         
      </div>

      <div className='btnIcone'>
        <Link to="/dispositivo/">
          <button type="submit">Voltar</button>
        </Link>
      </div>
    </section>
  )
}
export default ExcluirDispositivo
