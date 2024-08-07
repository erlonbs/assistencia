import { useEffect, useState } from 'react'
import './dispositivoEditar.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Dispositivos } from 'types/dispositivo'
import { Link } from 'react-router-dom'
import ExibirMensagem from 'components/Mensagem/mensagem'


function Editar() {
  const [dispositivo, setDispositivo] = useState<Dispositivos>()
  const [dispositivoId, setDispositivoId] = useState<string>('')
  const [dispositivoName, setDispositivoName] = useState<string>('')
  const [dispositivoMarca, setDispositivoMarca] = useState('')
  const [dispositivoModelo, setDispositivoModelo] = useState<string>('')
  const [dispositivoCor, setDispositivoCor] = useState<string>('')
  const [dispositivoSerial, setDispositivoSerial] = useState<string>('')
  const [dispositivoDescricao, setDispositivoDescricao] = useState<string>('')
  const [clienteName, setClienteName]= useState<string>('')
  const [codigoCliente, setCodigoCliente]= useState<string>()
  const [mensagem, setMensagem] = useState('');
  const [mensagemTipo, setMensagemTipo] = useState<'sucesso' | 'erro'>('erro');

  useEffect(() => {
    if (dispositivoId ) {
      axios.get(`${BASE_URL}/dispositivos/${dispositivoId}`).then(response => {
        setDispositivo(response.data);
        setMensagem(`Cliente: ${response.data.clienteName}`)
        setDispositivoName(response.data.dispositivoName);
        setDispositivoMarca(response.data.marca);
        setDispositivoModelo(response.data.modelo);
        setDispositivoCor(response.data.cor);
        setDispositivoSerial(response.data.serial);
        setDispositivoDescricao(response.data.descricao);
        setClienteName(response.data.clienteName);
        setCodigoCliente(response.data.clienteId);

      }).catch(error => {
        setMensagem('Verifique os dados digitados:')
        setMensagemTipo('erro')
      })
    } else  {
      setMensagem('preecha o campo')
      setMensagem('erro')
      limpaCampos()
    }
  }, [dispositivoId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .put(`${BASE_URL}/dispositivos/${dispositivoId}`, {
        dispositivoName: dispositivoName,
        marca: dispositivoMarca,
        modelo: dispositivoModelo,
        cor: dispositivoCor,
        serial: dispositivoSerial,
        descricao: dispositivoDescricao,
        clienteName: clienteName,
        clienteId: codigoCliente,
      })
      .then(response => {
        setMensagem('Editado com sucesso!')
        setMensagemTipo('sucesso')
        limpaCampos() // Handle success
      })
      .catch(error => {
        setMensagem('Não foi possivel editar, verifique e tente novamente!')
        setMensagemTipo('erro')
        console.log('erro não foi possível editar') // Handle errors
      })
      
  }
   function limpaCampos () {
    setDispositivoName('');
    setDispositivoMarca('');
    setDispositivoModelo('');
    setDispositivoCor('');
    setDispositivoSerial('');
    setDispositivoDescricao('');
    setClienteName('');  
    setCodigoCliente('');
  }

  return (
    <section className="containerDispositivo editarDispositivo">
      <h1 className="titulo">Editar Dispositivos</h1>

      <form className="containerForm" onSubmit={handleSubmit}>
        <label className='tituloEntrada' htmlFor="nome">Código do dispositivo </label>
        <input className='inputForm'
          type="text"
          value={dispositivoId}
          placeholder='Código'
          onChange={e => setDispositivoId(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="nome">Nome:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoName}
          onChange={e => setDispositivoName(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="marca">Marca:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoMarca}
          onChange={e => setDispositivoMarca(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="modelo">Modelo:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoModelo}
          onChange={e => setDispositivoModelo(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="cor">Cor:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoCor}
          onChange={e => setDispositivoCor(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="serial">Serial:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoSerial}
          onChange={e => setDispositivoSerial(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="descricao">Descrição:</label>
        <input className='inputForm'
          type="text"
          value={dispositivoDescricao}
          onChange={e => setDispositivoDescricao(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="descricao">Nome do cliente:</label>
        <input className='inputForm'
          type="text"
          value={clienteName}
          onChange={e => setClienteName(e.target.value)}
        />

        <label className='tituloEntrada' htmlFor="descricao">Código do cliente:</label>
        <input className='inputForm'
          type="text"
          value={codigoCliente}
          onChange={e => setCodigoCliente(e.target.value)}
        />

        <div className='btnIcone'>
          <button type="submit">Editar</button>
        </div>
        <ExibirMensagem mensagem={mensagem} mensagemType={mensagemTipo} />
      </form>

      <div className='btnIcone'>
        <Link to="/dispositivo/">
          <button type="submit">Voltar</button>
        </Link>
      </div>
     
    </section>
  )
}
export default Editar
