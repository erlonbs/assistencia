import axios from 'axios'
import './styles.css'
import { Clientes } from 'types/cliente'

import { BASE_URL } from 'utils/requests'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function BuscaCodigo() {

let name ='';
  
  const [clienteId, setClienteId] = useState<string>()

  const [cliente, setCliente] = useState<Clientes>()

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)
    })
  }, [clienteId])

  const handleSubmit = (event: { preventDefault: () => void }) =>{
    event.preventDefault();
<<<<<<< HEAD
    alert(`código inserido do cliente: ${name}`)

    setClienteId(name)
=======
    setClienteId(name)
    
>>>>>>> dd91e96603d911bd8c36063ce8dddc74f9c72656
  }

  return (

    
    <body>
      <form onSubmit={handleSubmit}>
        <h2>Entre com o código do cliente:</h2>

        <div className="entrada">

          
          <input
            type="text"
            name="codigo"
<<<<<<< HEAD
            value={clienteId}
            
          
            onChange={e => (name= e.target.value)}
            
=======
            value={clienteId}            
          
            onChange={e => (name= e.target.value)}            
>>>>>>> dd91e96603d911bd8c36063ce8dddc74f9c72656
                       
          ></input >

        </div>
 
      
      </form>
<<<<<<< HEAD
      <h2>O código do cliente é : {clienteId}</h2>
=======
  
>>>>>>> dd91e96603d911bd8c36063ce8dddc74f9c72656
      <div>
        <p className="dados">
          <h3>Dados do cliente:</h3>
          Código: {cliente?.id} <br />
          Nome: {cliente?.name}
          <br />
          Endereço: {cliente?.address}
          <br />
          Cpf: {cliente?.cpf}
          <br />
          Telefone: {cliente?.telephone}
        </p>
      </div>

      <Link className="voltar" to="/Cliente/Busca">
        <div>
          <button>voltar</button>
        </div>
      </Link>
    </body>
  )
}

export default BuscaCodigo
