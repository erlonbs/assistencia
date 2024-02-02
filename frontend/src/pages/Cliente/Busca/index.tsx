import './buscaStyles.css'
import { Link } from 'react-router-dom'

function Busca() {
  return (
    <main className='containerCliente'>
      <div className="containerButtons">
        <h2 className='titulo'>Listar todos</h2>


        <div>

          <Link to={"/Cliente/Busca/BuscaTodos"} >
            <button type="button" value="Consutar">Consultar</button>
          </Link>

        </div>

        <h2 className='titulo'>Consulta por código</h2>

        <div>
          <Link to={"/Cliente/Busca/BuscaCodigo"} >
            <button type="button" value="Consultar">Consultar</button>
          </Link>
        </div>

        <div>

          <Link className="voltar" to="/Cliente/1">
            <button >Voltar</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
export default Busca
