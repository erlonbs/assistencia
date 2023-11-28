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
  },[])

  return (
    
    <div className='containerOrcamento'>
      <form >
     
        <h2>Lista de todos os Orçamentos:</h2>

<table className='tabela'>
        <thead >
          <tr className='coluna' >
            <th className='cabecalho'>Código</th>
            <th className='cabecalho'>Dispositivo</th>
            <th className='cabecalho'>Nome do Dispositivo</th>
            <th className='cabecalho'>Defeito</th>
            <th className='cabecalho'>Descrição</th>
            <th className='cabecalho'>Valor</th>
            <th className='cabecalho'>Autorizado</th>                    
          
          
          </tr>
        </thead>
        <tbody className='conteudo'>
          {orcamentos.map((orcamento) => (
            <tr className='coluna'  key={orcamento.id}>
              <td className='celula'>{orcamento.id}</td>
              <td className='celula'>{orcamento.dispositivoId }</td>
              <td className='celula'>{orcamento.dispositivoName}</td>
              <td className='celula'>{orcamento.defeito}</td>
              <td className='celula'>{orcamento.descricao}</td>
              <td className='celula'>{orcamento.valor}</td>
              <td className='celula'>{orcamento.autorizado ? 'Sim' : 'Não'}</td>      

             
                     
              
            </tr>
          ))}
        </tbody>
      </table>
              
      </form>      

      <Link className="voltar" to="/orcamento/1">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </div>
  )
}
export default ListarOrcamento
