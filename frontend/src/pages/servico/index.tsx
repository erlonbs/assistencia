import { Link } from 'react-router-dom'
import './servicoStyles.css'


function Servico() {
  return (
    <body className="containerServico">
      <h1>Serviços</h1>

      <Link to ={`/servico/novo`} >
        
        <button className="btnOrcamento" type="button" >Novo</button>" 
    </Link>

    <Link to ={`/servico/listar`} >
        
        <button className="btnOrcamento" type="button" >Listar</button>" 
    </Link>

      <form>
        
        <a href="/">
          <input type="button" value="Voltar ao Início" />
        </a>
      </form>
    </body>
  )
}
export default Servico
