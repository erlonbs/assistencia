import { Clientes } from 'types/cliente'
import { BASE_URL } from 'utils/requests'
import axios from 'axios'
import './styles.css'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

function BuscaTodos() {
  const BASE = `${BASE_URL}`

  

  const [cliente, setCliente] = useState<Clientes>()

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes`).then(response => {
      setCliente(response.data)
      
    })
  },)

  return (
    
    <body>
      <form >
     
        <h2>Lista de todos clientes:</h2>

{JSON.stringify(cliente)} ; 


      
        
      </form>
      
      <Link className="voltar" to="/Cliente/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>

    </body>
  )
}
export default BuscaTodos
