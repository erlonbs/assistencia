import { Clientes } from 'types/cliente'
import { BASE_URL } from 'utils/requests'
<<<<<<< HEAD

import './styles.css'


import { Link } from 'react-router-dom'


=======
import './styles.css'

import { Link } from 'react-router-dom'

>>>>>>> dd91e96603d911bd8c36063ce8dddc74f9c72656
function Busca() {
 

  return (
   
      
    <body>
      <div className="busca">
        <label htmlFor="bt">"buscar todos"</label>
        <br />
        <br />

        <form>
          <a href="/Cliente/Busca/BuscaTodos">
            <input type="button" value="Buscar" />
          </a>
        </form>

        <label htmlFor="bc">"Buscar por código"</label>
        <form>
          <a href="/Cliente/Busca/BuscaCodigo">
            <input type="button" value="Buscar" />
          </a>
          
        </form>

        <Link className="voltar" to="/Cliente/1">
        <div>
          <button>voltar</button>
        </div>
      
      </Link>
      </div>
    </body>
  )
}
export default Busca
