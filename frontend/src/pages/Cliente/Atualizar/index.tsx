import { useEffect, useState } from 'react'
import './atualizarStyles.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Clientes } from 'types/cliente'
import { Link } from 'react-router-dom'
import ExibirMensagem from 'components/Mensagem/mensagem'

function Atualizar() {
  const [cliente, setCliente] = useState<Clientes>()
  const [clienteId, setClienteId] = useState<string>('')
  const [clienteName, setClienteName] = useState<string>('')
  const [clienteTelefone, setClienteTelefone] = useState<string>('')
  const [clienteEndereco, setClienteEndereco] = useState<string>('')
  const [clienteCpf, setClienteCpf] = useState<string>('');
  const [mensagem,setMensagem] = useState<string>('')

  useEffect(() => {
    if(clienteId && clienteId != null){ 
    axios.get(`${BASE_URL}/clientes/${clienteId}`).then(response => {
      setCliente(response.data)
      setClienteName(response.data.clienteName)
      setClienteEndereco(response.data.address) 
      setClienteTelefone(response.data.telephone)
      setClienteCpf(response.data.cpf)
      setMensagem(`Dados do cliente: ${response.data.clienteName}`)
     
    })
    .catch(error =>
      setMensagem(`Cliente não existe!`));
     
   

} else (setMensagem('Prencha o campo'));
       
    
  }, [clienteId])


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .put(`${BASE_URL}/clientes/${clienteId}`, {
        clienteName: clienteName,
        address: clienteEndereco,
        telephone: clienteTelefone,
        cpf: clienteCpf,
       
      })
      .then(response => {
        setMensagem('Atualizado com sucesso!') // Handle success        
        setTimeout(limpaCampos,7000)
      })
      .catch(error => {
        setMensagem(`Não foi possível atualizar ${error}`) // Handle errors      
        setTimeout(limpaCampos,7000)
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
          value={clienteName}        
          onChange={e => setClienteName(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="endereco">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={clienteEndereco}          
          onChange={e => setClienteEndereco(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="telefone">

        </label>
        <input
          className="inputForm"
          type="text"
          size={35}
          value={clienteTelefone}          
          onChange={e => setClienteTelefone(e.target.value)}
        />

        <label className="tituloEntrada" htmlFor="cpf">

        </label>
        <input
          className="inputForm"
          type="text"
          value={clienteCpf}  
          onChange={e => setClienteCpf(e.target.value)}
        />
        <div className="btnIcone">
          <button type="submit">
            Atualizar

          </button>
       
        </div>
        <ExibirMensagem mensagem={mensagem}/>
      </form>

      <Link className="btnIcone" to="/Cliente/">
        <div>
          <button>Voltar</button>
        
        </div>
        
      </Link>

  

    </section>
  )
}
export default Atualizar
