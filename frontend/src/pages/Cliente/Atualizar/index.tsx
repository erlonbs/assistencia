import { useEffect, useState } from 'react'
import './atualizarStyles.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Clientes } from 'types/cliente'
import { Link } from 'react-router-dom'
import { Writable } from 'stream'
import ExibirMensagem from 'components/Mensagem/mensagem'

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
        clienteName: clienteName,
        address: clienteEndereco,
        telephone: clienteTelefone,
        cpf: clienteCpf
      })
      .then(response => {
        ExibirMensagem('Atualizado com sucesso!', response) // Handle success
        limpaCampos()
      })
      .catch(error => {
        ExibirMensagem('Erro não foi possível atualizar!', error) // Handle errors
        limpaCampos()
      })
  }

  const limpaCampos = () => {
    setClienteId('')
    setClienteName('')
    setClienteTelefone('')
    setClienteEndereco('')
    setClienteCpf('')
  }

  return (
    <section className="containerCliente atualizarCliente">
      <h1 className="titulo">Atualizar Clientes</h1>

      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="nome">
          Insira o código para editar:{' '}
        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={clienteId}
          placeholder='Código'
          onChange={e => setClienteId(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="nome">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          id="nome"


          placeholder={cliente?.clienteName}
          onChange={e => setClienteName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="endereco">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          placeholder={cliente?.address}
          onChange={e => setClienteEndereco(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="telefone">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          placeholder={cliente?.telephone}
          onChange={e => setClienteTelefone(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="cpf">

        </label>
        <input
          className="inputForm"
          type="text"

          placeholder={cliente?.cpf}
          onChange={e => setClienteCpf(e.target.value)}
        />
        <div className="btnIcone">
          <button type="submit">
            Atualizar
          </button>
        </div>
      </form>

      <Link className="btnIcone" to="/Cliente/">
        <div>
          <button>Voltar</button>
        </div>
      </Link>

      <div id="menssagem"></div>

    </section>
  )
}
export default Atualizar
