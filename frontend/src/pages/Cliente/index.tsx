import './clienteStyles.css'
function Cliente() {
  return (
    
    <div className="containerCliente">
      <h1>Clientes</h1>

      <div className="buttons">
        <form>
          <a href="/Cliente/Busca">
            <input className='btnClientes' type="button" value="Consultar" />
          </a>
        </form>

  

        <form>
          <a href="/Cliente/Cadastrar">
            <input className='btnClientes' type="button" value="Cadastrar" />
          </a>
        </form>

        <form>
          <a href="/Cliente/Atualizar">
            <input className='btnClientes' type="button" value="Atualizar" />
          </a>
        </form>

        <form>
          <a href="/Cliente/Excluir">
            <input className='btnClientes' type="button" value="Excluir" />
          </a>
        </form>
        <form className="voltar">
        <a href="/">
          <input className='btnClientes' type="button" value="Voltar " />
        </a>
      </form>

      </div>

      
    </div>
  )
}
export default Cliente
