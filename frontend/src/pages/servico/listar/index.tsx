import { Servicos } from 'types/servico'

import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './listarServico.css'
import { useEffect, useState } from 'react'
import visualizarImagem from 'assets/icon/visualizar.png'
import { Link } from 'react-router-dom'


function ListarOrdemServico() {

  const [servicos, setServicos] = useState<Servicos[]>([])
  const [servicoId, setServicoId] = useState('');

  useEffect(() => {
    axios.get<Servicos[]>(`${BASE_URL}/servicos`).then(response => {
      setServicos(response.data);

    })
  }, [])

  return (

    <section className='containerServico containerListarServico'>

      <h2 className='titulo'>Lista de todos os serviços:</h2>
      <div >
        <div className='tabela-scroll'>
          <table className='tabela'>
            <thead >
              <tr className='coluna' >
                <th className='cabecalho'>Número da ordem</th>
                <th className='cabecalho'>Código do orçamento</th>
                <th className='cabecalho'>Nome do Cliente</th>
                <th className='cabecalho'>Código do Cliente</th>
                <th className='cabecalho'>Defeito</th>
                <th className='cabecalho'>Serviço realizado</th>
                <th className='cabecalho'>Valor</th>
                <th className='cabecalho'>Pagamento</th>
                <th className='cabecalho'>Status da ordem</th>
                <th className='cabecalho'>Detalhar</th>

              </tr>
            </thead>
            <tbody className='conteudo'>
              {servicos.map((servico) => (
                <tr className='coluna' key={servico.id}>
                  <td className='celula'>{servico.id}</td>
                  <td className='celula'>{servico.codigoOrcamento}</td>
                  <td className='celula'>{servico.clienteName}</td>
                  <td className='celula'>{servico.clienteId}</td>
                  <td className='celula'>{servico.descricao}</td>
                  <td className='celula'>{servico.servicoRealizado}</td>
                  <td className='celula'>{servico.valor}</td>
                  <td className='celula'>{servico.pagamento ? 'Sim' : 'Não'}</td>
                  <td className='celula'>{servico.pagamento ? 'aguardando' : 'finalizado'}</td>
                  <td className="celula">

                    {/* {passa o id para a outra página de detalhes da Ordem de Serviço e
                    exibindo os dados*/}
                    <Link className="detalhar" to={`/Servico/listar/detalhar/${servico.id}`}>
                      <img
                        className="visualizar"
                        src={visualizarImagem}
                        alt="icone visualizar"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="btnIcone">
        <Link to={`/servico`} >
          <button type="button" >Voltar</button>
        </Link>
      </div>

    </section>
  )
}
export default ListarOrdemServico
