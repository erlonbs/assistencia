import "./orcamentoStyles.css";
import { Link } from 'react-router-dom';

function Orcamento() {
    return (
        <body>

            <section className="containerOrcamento">
                <h1 className='titulo'>Orcamentos</h1>

                <div className='containerButtons'>

                    <div>

                        <Link to={`/orcamento/novo`} >
                            <button type="button" >Novo</button>
                        </Link>

                    </div>

                    <div>
                        <Link to={`/orcamento/listar`} >

                            <button type="button" >Listar</button>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/orcamento/editar`} >

                            <button type="button" >Editar</button>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/orcamento/excluir`} >

                            <button type="button" >Excluir</button>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/`} >

                            <button type="button" >Voltar</button>
                        </Link>
                    </div>
                </div>
            </section >
        </body>
    )

}
export default Orcamento
