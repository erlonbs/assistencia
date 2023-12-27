import { Link } from 'react-router-dom'
import './dispositivoStyles.css'


function Dispositivo() {
  return (
    <body className="containerDispositivo">

      <h1 className='containerTitulo'>Dispositivos</h1>

      <div className='btnDispositivo'>


        <div>
          <Link to={"/Dispositivo/Novo"} >
            <button className='btnDispositivo' type="button" value="Novo">Novo</button>
          </Link>
        </div>

        <div>
          <Link to={"/dispositivo/listar"} >
            <button className='btnDispositivo' type="button" value="Listar">Listar</button>
          </Link>
        </div>
        <div>
          <Link to={"/dispositivo/editar"} >
            <button className='btnDispositivo' type="button" value="Editar">Editar</button>
          </Link>
        </div>
       
        <div>
          <Link to={"/dispositivo/Excluir"} >
            <button className='btnDispositivo' type="button" value="Excluir">Excluir</button>
          </Link>
        </div>

        <div className="voltar">

          <Link to={"/"} >
            <button className='btnDispositivo' type="button" value="Voltar">Voltar</button>
          </Link>
        </div>


      </div>
    </body>
  )
}
export default Dispositivo
