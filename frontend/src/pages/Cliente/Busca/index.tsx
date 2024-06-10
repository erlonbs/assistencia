import './buscaStyles.css'
import { Link } from 'react-router-dom'

function Busca() {
  return (
    <section className='containerCliente todosClientes'>
      <div className="containerButtons">
        <div className='buscaTodos'>
          <h2 className='titulo'>Listar todos</h2>

          <Link to={"/Cliente/Busca/BuscaTodos"} >
            <button type="button" value="Consutar">Consultar</button>
          </Link>

        </div>
        <div className='buscaCodigo'>
          <h2 className='titulo'>Consulta por código</h2>

          <Link to={"/Cliente/Busca/BuscaCodigo"} >
            <button type="button" value="Consultar">Consultar</button>
          </Link>
        </div>

        
      </div>
      <div className='btnIcone'>

          <Link className="voltar" to="/Cliente/">
            <button >Voltar</button>
          </Link>
        </div>
    </section>
  )
}
export default Busca
