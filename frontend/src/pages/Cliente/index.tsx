import { Link } from 'react-router-dom'
import './clienteStyles.css'
function Cliente() {
  return (


    <div className="containerCliente">
      <h1 className='titulo'>Clientes</h1>

      <div className="containerButtons">

        <div>

          <Link to={"/Cliente/Busca"} >
            <button type="button" value="Consultar">Consultar</button>
          </Link>
        </div>

        <div>

          <Link to={"/Cliente/Cadastrar"} >
            <button className='btnClientes' type="button" value="Cadastrar">Cadastrar</button>
          </Link>
        </div>

        <div>
          <Link to={"/Cliente/Atualizar"} >
            <button className='btnClientes' type="button" value="Atualizar">Atualizar</button>
          </Link>
        </div>

        <div>
          <Link to={"/Cliente/Excluir"} >
            <button className='btnClientes' type="button" value="Excluir">Excluir</button>
          </Link>
        </div>

      </div>
      <div className="btnIcone">
        <Link to={"/Menu"} >
          <button type="button" >Voltar</button>
        </Link>
      </div>

    </div>

  )
}
export default Cliente
