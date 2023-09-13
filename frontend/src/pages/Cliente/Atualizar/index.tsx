import './styles.css'
function Atualizar() {



  return (
    <body className="inicio">
      <h1 className="titulo">Atualizar Clientes</h1>

      
      <form className="container">

      <label htmlFor="nome">Id </label>
        <input type="text" />

        <label htmlFor="nome">Nome:</label>
        <input type="text" />

        <label htmlFor="">Endereço:</label>
        <input type="text" />

        <label htmlFor="">Telefone:</label>
        <input type="text" />

        <label htmlFor="">Cpf:</label>
        <input type="text" />
      </form>

      <form className="btnAtualizar">
        <a href="/cliente/atualizar">
          <input type="button" value="Atualizar" />
        </a>
      </form>

      <form className="btnVoltar">
        <a href="/Cliente/1">
          <input type="button" value="Voltar " />
        </a>
      </form>
    </body>
  )
}
export default Atualizar
