import { Orcamentos } from 'types/orcamento'

import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './listarOrcamento.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'



function ListarOrcamento() {

  const [orcamentos, setOrcamentos] = useState<Orcamentos[]>([])

  useEffect(() => {
    axios.get<Orcamentos[]>(`${BASE_URL}/orcamentos`).then(response => {

      setOrcamentos(response.data)

      console.log(response.data)

    })
  }, [])

  return (

    <div className='containerOrcamento listarOrcamento' >
      <form >

        <h2 className='titulo'>Lista de todos os Orçamentos:</h2>

        <div className='tabela-scroll'>
          <table className='tabela-orcamento'>
            <thead >
              <tr className='coluna' >
                <th className='cabecalho'>Código</th>
                <th className='cabecalho'>Dispositivo</th>
                <th className='cabecalho'>Nome do Dispositivo</th>
                <th className='cabecalho'>Nome do Cliente</th>
                <th className='cabecalho'>Defeito</th>
                <th className='cabecalho'>Descrição</th>
                <th className='cabecalho'>Valor</th>
                <th className='cabecalho'>Autorizado</th>
                <th className='cabecalho'>Código do cliente</th>


              </tr>
            </thead>

            <tbody className='cont'>

              {orcamentos.map((orcamento) => (
                <tr className='coluna' key={orcamento.id}>
                  <td className='celula'>{orcamento.id}</td>
                  <td className='celula'>{orcamento.dispositivoId}</td>
                  <td className='celula'>{orcamento.dispositivoName}</td>
                  <td className='celula'>{orcamento.clienteName}</td>
                  <td className='celula'>{orcamento.defeito}</td>
                  <td className='celula'>{orcamento.descricao}</td>
                  <td className='celula'>{orcamento.valor}</td>
                  <td className='celula'>{orcamento.autorizado ? 'Sim' : 'Não'}</td>
                  <td className='celula'>{orcamento.clienteId}</td>

                </tr>
              ))}

            </tbody>

          </table>
        </div >
      </form>
      <div className="btnIcone">
        <Link to={`/orcamento`} >
          <button type="button" >Voltar</button>
        </Link>
      </div>
    </div>
  )
}
export default ListarOrcamento
