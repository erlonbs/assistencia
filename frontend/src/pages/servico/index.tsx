import { Link } from 'react-router-dom'
import './servicoStyles.css'


function Servico() {
  return (


    <main className="containerServico">
      <h1 className='titulo'>Serviços</h1>

      <div className='containerButtons'>

        <Link to={`/servico/novo`} >
          <button type="button" >Novo</button>
        </Link>

        <Link to={`/servico/listar`} >

          <button type="button" >Listar</button>
        </Link>

        <Link to={`/servico/editar`} >

          <button type="button" >Editar</button>
        </Link>

        <Link to={`/servico/excluir`} >

          <button type="button" >Excluir</button>
        </Link>

      </div >
      <div className='btnIcone'>
        <Link to={`/Menu`} >
          <button type="button" >Voltar</button>
        </Link>
      </div>
    </main>

  )
}
export default Servico
