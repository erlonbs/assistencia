import { useState } from 'react';
import { BASE_URL } from 'utils/requests';
import './excluirDispositivo.css';
import axios from 'axios';

//import { Clientes } from 'types/cliente'

function ExcluirDispositivo() {
const [id, setId] = useState('');
const [mensagem, setMensagem] = useState('');
const[dispositivo, setDispositivo] = useState('')


  const BASE = `${BASE_URL}/dispositivos`
 
  const handleDelete = async () => {
         
    try {
      const response = await axios.delete(`${BASE}/${id}`);
      console.log('Dispositivo excluído com sucesso!', dispositivo)
      setDispositivo(response.data.name)
      setMensagem(`Dispositivo com Id '  ${id} ${response.data}'  excluído com sucesso!`)
      setId('')
    } catch (error) {
      console.error('Não foi possível excluir:', error)
      setMensagem(`Erro ao excluir o cliente ${id} "" + verifique e tente novamente!`)
      setId('')
    }
  }

  return (
    <div className="containerDispositivo">
      <h1>Excluir Dispositivos</h1>

      <div className="busca">
        <label htmlFor="bt">Buscar todos Dispositivos:</label>
        <form >
          <a href="/">
            <input type="button" value="Buscar" />
          </a>
        </form>
      </div>     

        <h6>insira o dispositivo a ser excluido:</h6>    
      
            <input type="text" value={id} onChange={e => setId(e.target.value) }/>
            <button onClick={handleDelete}>Excluir id</button>

            {mensagem && <div className="mensagem" >{mensagem}</div> }            

      <div>
        <form className="voltar">
          <a href="/Dispositivo/1">
            <input type="button" value="Voltar" />
          </a>
        </form>
      </div>
    </div>
  )
}
export default ExcluirDispositivo
