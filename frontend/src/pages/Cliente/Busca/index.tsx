import './buscaStyles.css'
import { Link } from 'react-router-dom'

function Busca() {
  return (
    <section className='containerCliente'>
      <div className="busca">
        <label htmlFor="bt">Consultar todos</label>
       

        <div>

          <Link to={"/Cliente/Busca/BuscaTodos"} >
            <button className='btnInput' type="button" value="Consutar">Consultar</button>
          </Link>

        </div>

        <label htmlFor="bc">Consultar por código</label>

        <div>
          <Link to={"/Cliente/Busca/BuscaCodigo"} >
            <button className='btnInput' type="button" value="Consultar">Consultar</button>
          </Link>
        </div>

        <div>

          <Link className="voltar" to="/Cliente/1">
            <button className='btnInput'>Voltar</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Busca
