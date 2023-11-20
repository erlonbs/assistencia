import './styles.css'
import { Link } from 'react-router-dom'

function Busca() {
  return (
    <div className='containerCliente'>
      <div className="busca">
        <label htmlFor="bt">Listar todos</label>
        <br />
        <br />

        <form>
          <a href="/Cliente/Busca/BuscaTodos">
            <input type="button" value="Consultar" />
          </a>
        </form>

        <label htmlFor="bc">Consultar por código</label>
        <form>
          <a href="/Cliente/Busca/BuscaCodigo">
            <input type="button" value="Consultar" />
          </a>
        </form>

        <Link className="voltar" to="/Cliente/1">
          <div>
            <button>voltar</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Busca
