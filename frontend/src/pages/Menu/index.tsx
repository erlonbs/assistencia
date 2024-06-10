
import { Link } from 'react-router-dom';
import './menuStyles.css';
import '../../index.css';
import { useEffect, useState } from 'react';
function Menu() {

  const [thema, setThema] = useState(() => {
    return localStorage.getItem('thema') || 'verde-claro';

  });
  const mudarTema = (event: { target: { value: any; }; }) => {
    const selectThema = (event.target.value)
    setThema(selectThema);
    localStorage.setItem('thema', selectThema);
  };

  useEffect(() => {
    document.documentElement.className = thema + '-thema';
  }, [thema])

  return (

    <div className="menu ">
      <h1 className="titulo">Menu</h1>

      {/* Selecionando um tema para aplicação*/}

      <label htmlFor="">Thema:</label>

      <select value={thema} onChange={mudarTema}
        style={{ backgroundColor: `var(--select-background)`, color: 'white' }} >
        <option className='corOption' value="blue">Verde-claro</option >
        <option className='corOption' value="verde">Verde</option>
        <option className='corOption' value="lilas">Lilas</option>
        <option className='corOption' value="marron">Marron</option>
        <option className='corOption' value="black">Black</option>
        <option className='corOption' value="amarelo">Amarelo</option>

      </select>
      <div className='containerMenu'>


        <div className="containerButtons">
          <div className='btnClienteImagem'></div>
          <Link to={"/cliente/"} >
            <button type="button" value="Clientes">Clientes</button>
          </Link>
        </div>

        <div className="containerButtons">
          <div className='btnDispositivoImagem'></div>
          <Link to={"/dispositivo/"} >
            <button type="button" value="Dispositivos">Dispositivos</button>
          </Link>
        </div>

        <div className="containerButtons">
          <div className='btnOrcamentosImagem'></div>
          <Link to={"/orcamento/"} >
            <button type="button" value="Orcamentos">Orçamentos</button>
          </Link>
        </div>


        <div className="containerButtons">
          <div className='btnServicosImagem'></div>
          <Link to={"/servico/"} >
            <button type="button" value="Servicos">Serviços</button>
          </Link>
        </div>

      </div>
      <div className='btnIcone'>
        <Link to={"/"}>
          <button type='button' value='Voltar'>Sair</button>
        </Link>
      </div>
    </div>
  )
}

export default Menu
