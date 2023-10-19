import './styles.css'
function Menu() {
  return (
    <body className="menu">
      <h1 className="menuH1">Menu</h1>

      <form className="btnCliente">
        <a href="/cliente/1">
          <input type="button" value="Clientes" />
        </a>
       
      </form>

      <form className="btnDispositivo">
        <a href="/dispositivo/1">
          <input type="button" value="Dispositivos" />
        </a>
      </form>
      <form className='btnOrcamentos'>
        <a href="/orcamento/1">
          <input type="button" value="Orçamentos" />
        </a>
      </form>
    </body>
  )
}

export default Menu
