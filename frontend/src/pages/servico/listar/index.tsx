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
  },[])

  return (
    
    <div className='containerOrcamento'>
      <form >
     
        <h2>Lista de todos os Orçamentos:</h2>

<table className='tabela'>
        <thead >
          <tr className='coluna' >
            <th className='cabecalho'>Número da ordem</th>
            <th className='cabecalho'>Código do orçamento</th>
            <th className='cabecalho'>Nome do Cliente</th>
           
            <th className='cabecalho'>Descrição do Serviço</th>
            <th className='cabecalho'>Valor</th>
            <th className='cabecalho'>Pagamento</th>   
            <th className='cabecalho'>Código do Cliente</th>                       
          
          
          </tr>
        </thead>
        <tbody className='conteudo'>
          {servicos.map((servico) => (
            <tr className='coluna'  key={servico.id}>
              <td className='celula'>{servico.id}</td>
              <td className='celula'>{servico.codigoOrcamento }</td>
              <td className='celula'>{servico.clienteName}</td>
            
              <td className='celula'>{servico.descricao}</td>
              <td className='celula'>{servico.valor}</td>
              <td className='celula'>{servico.pagamento ? 'Sim' : 'Não'}</td>   
              <td className='celula'>{servico.clienteId}</td>   

             
                     
              
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
export default ListarOrdemServico
