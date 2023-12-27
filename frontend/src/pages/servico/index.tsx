import { Link } from 'react-router-dom'
import './servicoStyles.css'


function Servico() {
  return (
    <body className="containerServico">
      <h1>Serviços</h1>

      <Link to={`/servico/novo`} >

        <button className="btnServico" type="button" >Novo</button>"
      </Link>

      <Link to={`/servico/listar`} >

        <button className="btnServico" type="button" >Listar</button>"
      </Link>

      <div>
        <Link to={`/`} >

          <button className="btnServico" type="button" >Voltar</button>"
        </Link>

      </div>


    </body>
  )
}
export default Servico
