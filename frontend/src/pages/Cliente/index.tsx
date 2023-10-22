import './clienteStyles.css'
function Cliente() {
  return (
    
    <div className="containerCliente">
      <h1>Clientes</h1>

      <div className="buttons">
        <form>
          <a href="/Cliente/Busca">
            <input type="button" value="Consultar" />
          </a>
        </form>

  

        <form>
          <a href="/Cliente/Cadastrar">
            <input type="button" value="Cadastrar" />
          </a>
        </form>

        <form>
          <a href="/Cliente/Atualizar">
            <input type="button" value="Atualizar" />
          </a>
        </form>

        <form>
          <a href="/Cliente/Excluir">
            <input type="button" value="Excluir" />
          </a>
        </form>
      </div>

      <form className="voltar">
        <a href="/">
          <input type="button" value="Voltar " />
        </a>
      </form>
    </div>
  )
}
export default Cliente
