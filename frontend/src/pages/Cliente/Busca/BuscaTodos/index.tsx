import { Clientes } from 'types/cliente'
import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './styles.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function BuscaTodos() {    

  const [clientes, setClientes] = useState<Clientes[]>([])

  useEffect(() => {
    axios.get<Clientes[]>(`${BASE_URL}/clientes`).then(response => {
      setClientes(response.data)
      
    })
  },[])

  return (
    
    <body>
      <form >
     
        <h2>Lista de todos clientes:</h2>

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
          {clientes.map((cliente) => (
            <tr className='coluna'  key={cliente.id}>
              <td className='celula'>{cliente.id}</td>
              <td className='celula'>{cliente.name}</td>
              <td className='celula'>{cliente.address}</td>
              <td className='celula'>{cliente.telephone}</td>
              <td className='celula'>{cliente.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
              
      </form>      

      <Link className="voltar" to="/Cliente/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </body>
  )
}
export default BuscaTodos
