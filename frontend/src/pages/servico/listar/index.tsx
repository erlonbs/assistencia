import { Servicos } from 'types/servico'

import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './listarServico.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'


function ListarOrdemServico() {

  const [servicos, setServicos] = useState<Servicos[]>([])

  useEffect(() => {
    axios.get<Servicos[]>(`${BASE_URL}/servicos`).then(response => {

      setServicos(response.data)

      console.log(response.data)

    })
  }, [])

  return (

    <div className='containerServico'>
      <form >

        <h2>Lista de todos os serviços:</h2>

        <table className='tabela'>
          <thead >
            <tr className='coluna' >
              <th className='cabecalho'>Número da ordem</th>
              <th className='cabecalho'>Código do orçamento</th>
              <th className='cabecalho'>Nome do Cliente</th>

              <th className='cabecalho'>Defeito</th>
              <th className='cabecalho'>Serviço realizado</th>

              <th className='cabecalho'>Valor</th>
              <th className='cabecalho'>Pagamento</th>

              <th className='cabecalho'>Status da ordem</th>

            </tr>
          </thead>
          <tbody className='conteudo'>
            {servicos.map((servico) => (
              <tr className='coluna' key={servico.id}>
                <td className='celula'>{servico.id}</td>
                <td className='celula'>{servico.codigoOrcamento}</td>
                <td className='celula'>{servico.clienteName}</td>

                <td className='celula'>{servico.descricao}</td>
                <td className='celula'>{servico.servicoRealizado}</td>

                <td className='celula'>{servico.valor}</td>
                <td className='celula'>{servico.pagamento ? 'Sim' : 'Não'}</td>

              </tr>
            ))}
          </tbody>
        </table>

      </form>

      <Link className="voltar" to="/servico/1">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </div>
  )
}
export default ListarOrdemServico
