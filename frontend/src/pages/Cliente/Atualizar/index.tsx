import { useEffect, useState } from 'react'
import './atualizarStyles.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Clientes } from 'types/cliente'

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

  const exibirMensagem = (mensagem: string, responseData: any) => {
    const mensagemElemento = document.createElement('div')
    mensagemElemento.textContent = mensagem

    const localParaExibir = document.getElementById('menssagem')
    localParaExibir?.appendChild(mensagemElemento)

    console.log('Dados da resposata: ' + responseData)
  }

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
        exibirMensagem('Atualizado com sucesso!', response) // Handle success
        limpaCampos()
      })
      .catch(error => {
        exibirMensagem('Erro não foi possível atualizar!', error) // Handle errors
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
    <div className="containerCliente">
      <h1 className="titulo">Atualizar Clientes</h1>

      <form className="containerForm" onSubmit={handleSubmit}>
        <label className="tituloEntrada" htmlFor="nome">
          Id{' '}
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          value={clienteId}
          onChange={e => setClienteId(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="nome">
          Nome:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          id="nome"
          value={clienteName}
          placeholder={cliente?.clienteName}
          onChange={e => setClienteName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="endereco">
          Endereço:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          placeholder={cliente?.address}
          onChange={e => setClienteEndereco(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="telefone">
          Telefone:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          placeholder={cliente?.telephone}
          onChange={e => setClienteTelefone(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="cpf">
          Cpf:
        </label>
        <input
          className="entradaDados"
          type="text"
          size={35}
          placeholder={cliente?.cpf}
          onChange={e => setClienteCpf(e.target.value)}
        />

        <button className="btnAtualizar" type="submit">
          Atualizar
        </button>
      </form>

      <div id="menssagem"></div>

      <form className="btnVoltar">
        <a href="/Cliente/1">
          <input type="button" value="Voltar " />
        </a>
      </form>
    </div>
  )
}
export default Atualizar
