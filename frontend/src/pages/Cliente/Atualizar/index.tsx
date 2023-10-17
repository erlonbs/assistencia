import { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Clientes } from 'types/cliente'
import { Link } from 'react-router-dom'


function Atualizar() {
  const [cliente, setCliente] = useState<Clientes>()
  const [clienteId, setClienteId] = useState<string>('')
  const [clienteName, setClienteName] = useState<string>('')
  const [clienteTelefone, setClienteTelefone] = useState<string>('')
  const [clienteEndereco, setClienteEndereco] = useState<string>('')
  const [clienteCpf, setClienteCpf] = useState<string>('')

  useEffect(() => {
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)
    })
  }, [clienteId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .put(`${BASE_URL}/clientes/${clienteId}`, {
        name: clienteName,
        address: clienteEndereco,
        telephone: clienteTelefone,
        cpf: clienteCpf
      })
      .then(response => {
        console.log('sucesso') // Handle success
      })
      .catch(error => {
        console.log('erro não foi possível') // Handle errors
      })
  }

  return (
    <div className="inicio">
      <h1 className="titulo">Atualizar Clientes</h1>

      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor="nome">Id </label>
        <input
          type="text"
          value={clienteId}
          onChange={e => setClienteId(e.target.value)}
        />

        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={clienteName}
          placeholder={cliente?.name}
          onChange={e => setClienteName(e.target.value)}
        />

        <label htmlFor="">Endereço:</label>
        <input
          type="text"
          placeholder={cliente?.address}
          onChange={e => setClienteEndereco(e.target.value)}
        />

        <label htmlFor="">Telefone:</label>
        <input
          type="text"
          placeholder={cliente?.telephone}
          onChange={e => setClienteTelefone(e.target.value)}
        />

        <label htmlFor="">Cpf:</label>
        <input
          type="text"
          placeholder={cliente?.cpf}
          onChange={e => setClienteCpf(e.target.value)}
        />

        <button type="submit">Atualizar</button>
        <Link to="/cliente/1">Voltar</Link>
      </form>
    </div>
  )
}
export default Atualizar
