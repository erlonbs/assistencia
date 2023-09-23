import axios from 'axios'
import './styles.css'
import { Clientes } from 'types/cliente'

import { BASE_URL } from 'utils/requests'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BuscaCodigo() {
  

  const [clienteId, setClienteId] = useState<string>()

  const [cliente, setCliente] = useState<Clientes>()

  const[mensagem, setMensagem] = useState<string>();


  useEffect(() => {
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)
    })
  }, [clienteId])
 
  const handleSubmit = (event:  React.FormEvent) => {
    event.preventDefault()
   
    if (cliente ){
      setMensagem(`Verifique abaixo os dados de : ${cliente.name}`)
    }
    else {
      setMensagem(' Cliente inexistente')
    }     
    
  };

  return (
    <div>
      <form className='formulario' onSubmit={handleSubmit}>
        <h2>Entre com o código do cliente:</h2>

        <div className="entrada">
          <input
            type="text"
          name="codigo"
            value={clienteId}
            onChange={e => (setClienteId(e.target.value))}
         
          ></input>
        </div>
        <button className='botaoEnviar' type='submit'>Consultar</button>
      </form>

      {mensagem && (
        <div className="mensagem">{mensagem}</div>
      )}
             
<table className='tabela'>
        <thead >
          <tr className='coluna' >
            <th className='cabecalho'>Código</th>
            <th className='cabecalho'>Nome</th>
            <th className='cabecalho'>Endereço</th>
            <th className='cabecalho'>Telefone</th>
            <th className='cabecalho'>CPF</th>
          </tr>
        </thead>
        <tbody className='conteudo'>
          {
            <tr className='coluna'  key={cliente?.id}>
              <td className='celula'>{cliente?.id}</td>
              <td className='celula'>{cliente?.name}</td>
              <td className='celula'>{cliente?.address}</td>
              <td className='celula'>{cliente?.telephone}</td>
              <td className='celula'>{cliente?.cpf}</td>
            </tr>
          }
        </tbody>
      </table>

      <Link className="voltar" to="/Cliente/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>
    </div>
  )
}

export default BuscaCodigo
