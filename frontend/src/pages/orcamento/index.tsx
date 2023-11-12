import "./orcamentoStyles.css";

function Orcamento() {
  return (
    <div className="containerOrcamento">
    <h1 className='containerTitulo'>Orcamentos</h1>

    <form className='btnOrcamento'>
     
      <a href="/orcamento/novo">
        <input className='btnOrcamento' type="button" value="Novo" />
      </a>
      <a href="/orcamento/listar">
        <input className='btnOrcamento' type="button" value="Listar" />
      </a>
      <a href="/orcamento/editar">
        <input className='btnDispositivo' type="button" value="Editar" />         
      </a>

      <a href="/orcamento/excluir">
        <input className='btnOrcamento' type="button" value="Excluir" />
      </a>

      <a href="/">
        <input className='btnOrcamento' type="button" value="Voltar" />
      </a>
    </form>
    </div>
)
  
}
export default Orcamento
