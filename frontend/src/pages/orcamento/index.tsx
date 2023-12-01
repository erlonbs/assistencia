import "./orcamentoStyles.css";
import { Link } from 'react-router-dom';

function Orcamento() {
  return (
    <div className="containerOrcamento">
    <h1 className='containerTitulo'>Orcamentos</h1>

   
    <Link to ={`/orcamento/novo`} >
        
        <button className="btnOrcamento" type="button" >Novo</button>" 
    </Link>

    <Link to ={`/orcamento/listar`} >
        
        <button className="btnOrcamento" type="button" >Listar</button>" 
    </Link>

    <Link to ={`/orcamento/editar`} >
        
        <button className="btnOrcamento" type="button" >Editar</button>" 
    </Link>

    <Link to ={`/orcamento/excluir`} >
        
        <button className="btnOrcamento" type="button" >Excluir</button>" 
    </Link>

    <Link to ={`/`} >
        
        <button className="btnOrcamento" type="button" >Voltar</button>" 
    </Link>
    </div>
)
  
}
export default Orcamento
