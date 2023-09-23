import './styles.css'
import { Link } from 'react-router-dom'

function Busca() {
  return (
    <body>
      <div className="busca">
        <label htmlFor="bt">"buscar todos"</label>
        <br />
        <br />

        <form>
          <a href="/Cliente/Busca/BuscaTodos">
            <input type="button" value="Buscar" />
          </a>
        </form>

        <label htmlFor="bc">"Buscar por código"</label>
        <form>
          <a href="/Cliente/Busca/BuscaCodigo">
            <input type="button" value="Buscar" />
          </a>
        </form>

        <Link className="voltar" to="/Cliente/1">
          <div>
            <button>voltar</button>
          </div>
        </Link>
      </div>
    </body>
  )
}
export default Busca
