import { Clientes } from 'types/cliente'
import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './buscaTodos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function BuscaTodos() {

  const [clientes, setClientes] = useState<Clientes[]>([])

  useEffect(() => {
    axios.get<Clientes[]>(`${BASE_URL}/clientes`).then(response => {
      setClientes(response.data)
    })
  }, [])


  return (

    <div className='containerCliente'>
      <form className='formulario' >

        <h2>Lista de todos clientes:</h2>

        <table className='tabela'>
          <thead >
            <tr className='coluna' >
              <th className='cabecalho'>Código</th>
              <th className='cabecalho'>Nome</th>
              <th className='cabecalho'>Endereço</th>
              <th className='cabecalho'>Telefone</th>
              <th className='cabecalho'>CPF</th>
              <th className='cabecalho'>Dispositivos</th>
            </tr>
          </thead>
          <tbody className='conteudo'>
            {clientes.map((cliente) => (
              <tr className='coluna' key={cliente.clienteId}>
                <td className='celula'>{cliente.clienteId}</td>
                <td className='celula'>{cliente.clienteName}</td>
                <td className='celula'>{cliente.address}</td>
                <td className='celula'>{cliente.telephone}</td>
                <td className='celula'>{cliente.cpf}</td>

            {/*Exibindo os dispositivos do cliente em um select*/}
                <td className='celula' >
                  <select name={`dispositivo-${cliente.clienteId}`} id={`dispositivo-${cliente.clienteId}`}>
                    {cliente.dispositivos.map((dispositivo) => (
                      <option key={dispositivo.dispositivoId} value={dispositivo.dispositivoId} >
                        {dispositivo.dispositivoName}
                      </option>
                    ))}
                  </select>
                </td>
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
    </div>
  )
}
export default BuscaTodos
