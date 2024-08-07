import { Dispositivos } from 'types/dispositivo'
import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import '../../../index.css'
import './listarDispositivo.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function Listar() {

  const [dispositivos, setDispositivos] = useState<Dispositivos[]>([])

  useEffect(() => {
    axios.get<Dispositivos[]>(`${BASE_URL}/dispositivos`)
    .then(response => {
      setDispositivos(response.data)

    })
  }, [])

  return (

    <section className='containerDispositivo listarDispositivo'>
      <form >

        <h2 className='titulo'>Lista de todos Dispositivos:</h2>
        <div className='tabela-scroll'>
        <table className='tabela'>
          <thead >
            <tr className='coluna' >
              <th className='cabecalho'>Código</th>
              <th className='cabecalho'>Nome</th>
              <th className='cabecalho'>Marca</th>
              <th className='cabecalho'>Modelo</th>
              <th className='cabecalho'>Cor</th>
              <th className='cabecalho'>Serial</th>
              <th className='cabecalho'>Descrição</th>
              <th className='cabecalho'>Nome do cliente</th>
              <th className='cabecalho'>Código do cliente</th>
            </tr>
          </thead>
          <tbody className='conteudo'>
            {dispositivos.map((dispositivo) => (
              <tr className='coluna' key={dispositivo.dispositivoId}>
                <td className='celula'>{dispositivo.dispositivoId}</td>
                <td className='celula'>{dispositivo.dispositivoName}</td>
                <td className='celula'>{dispositivo.marca}</td>
                <td className='celula'>{dispositivo.modelo}</td>
                <td className='celula'>{dispositivo.cor}</td>
                <td className='celula'>{dispositivo.serial}</td>
                <td className='celula'>{dispositivo.descricao}</td>
                <td className='celula'>{dispositivo.clienteName}</td>
                <td className='celula'>{dispositivo.clienteId}</td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
      </form>

      <div className='btnIcone'>
        <Link to="/dispositivo/">
          <button type="submit">Voltar</button>
        </Link>
      </div>
    </section>
  )
}
export default Listar
