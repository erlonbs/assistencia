
import './menuStyles.css';
function Menu() {
  return (

    <div className="menu">
      <h1 className="menuH1">Menu</h1>
      <div className='containerMenu'>
        

        <div className="btnMenu">
          <div className='btnClienteImagem'></div>          
          <a href="/cliente/1">
            <input className='btnInput' type="button" value="Clientes" />
          </a>
        </div>

        <div className="btnMenu">
          <div className='btnDispositivoImagem'></div>
          <a href="/dispositivo/1">
            <input className='btnInput' type="button" value="Dispositivos" />
          </a>
        </div>

        <div className="btnMenu">
          <div className='btnOrcamentosImagem'></div>
          <a href="/orcamento/1">
            <input className='btnInput' type="button" value="Orçamentos" />
          </a>
        </div>


        <div className="btnMenu">
          <div className='btnServicosImagem'></div>
          <a href="/servico/1">
            <input className='btnInput' type="button" value="Serviços" />
          </a>
        </div>


      </div>

    </div>
  )
}

export default Menu
