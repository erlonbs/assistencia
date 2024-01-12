import { Link } from 'react-router-dom'
import './dispositivoStyles.css'


function Dispositivo() {
  return (

    <body>

      <section className="containerDispositivo">

        <h1 className='titulo'>Dispositivos</h1>

        <div className='containerButtons'>

          <div>
            <Link to={"/Dispositivo/Novo"} >
              <button type="button" value="Novo">Novo</button>
            </Link>
          </div>

          <div>
            <Link to={"/dispositivo/listar"} >
              <button type="button" value="Listar">Listar</button>
            </Link>
          </div>
          <div>
            <Link to={"/dispositivo/editar"} >
              <button type="button" value="Editar">Editar</button>
            </Link>
          </div>

          <div>
            <Link to={"/dispositivo/Excluir"} >
              <button type="button" value="Excluir">Excluir</button>
            </Link>
          </div>

          <div className="voltar">

            <Link to={"/"} >
              <button  type="button" value="Voltar">Voltar</button>
            </Link>
          </div>
        </div>
      </section>
    </body>
  )

}
export default Dispositivo
