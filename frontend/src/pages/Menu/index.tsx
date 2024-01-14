
import { Link } from 'react-router-dom';
import './menuStyles.css';
function Menu() {
  return (

    <div className="menu">
      <h1 className="menuH1">Menu</h1>
      <div className='containerMenu'>
        

        <div className="containerButtons">
          <div className='btnClienteImagem'></div>          
          <Link to={"/cliente/1"} >
            <button type="button" value="Clientes">Clientes</button>  
          </Link>
        </div>

        <div className="containerButtons">
          <div className='btnDispositivoImagem'></div>
          <Link to={"/dispositivo/1"} >
            <button type="button" value="Dispositivos">Dispositivos</button>  
          </Link>
        </div>

        <div className="containerButtons">
          <div className='btnOrcamentosImagem'></div>
          <Link to={"/orcamento/1"} >
            <button type="button" value="Orcamentos">Orçamentos</button>  
          </Link>
        </div>


        <div className="containerButtons">
          <div className='btnServicosImagem'></div>
          <Link to={"/servico/1"} >
            <button  type="button" value="Servicos">Serviços</button>  
          </Link>
        </div>


      </div>

    </div>
  )
}

export default Menu
