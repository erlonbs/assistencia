import { useEffect, useState } from 'react'
import './dispositivoEditar.css'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Dispositivos } from 'types/dispositivo'
import { Link } from 'react-router-dom'


function Editar() {
  const [dispositivo, setDispositivo] = useState<Dispositivos>()
  const [dispositivoId, setDispositivoId] = useState<string>('')
  const [dispositivoName, setDispositivoName] = useState<string>('')
  const [dispositivoMarca, setDispositivoMarca] = useState<string>('')
  const [dispositivoModelo, setDispositivoModelo] = useState<string>('')
  const [dispositivoCor, setDispositivoCor] = useState<string>('')
  const [dispositivoSerial, setDispositivoSerial] = useState<string>('')
  const [dispositivoDescricao, setDispositivoDescricao] = useState<string>('')

  useEffect(() => {
    axios.get(`${BASE_URL}/dispositivos/${dispositivoId}`).then(response => {
      setDispositivo(response.data)
    })
  }, [dispositivoId])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    axios
      .put(`${BASE_URL}/dispositivos/${dispositivoId}`, {
        name: dispositivoName,
        marca: dispositivoMarca,
        modelo: dispositivoModelo,
        cor: dispositivoCor,
        serial: dispositivoSerial,
        descricao: dispositivoDescricao
      })
      .then(response => {
        console.log('sucesso') // Handle success
      })
      .catch(error => {
        console.log('erro não foi possível') // Handle errors
      })
  }

  return (
    <div className="containerDispositivo">
      <h1 className="titulo">Editar Dispositivos</h1>

      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor="nome">Codigo </label>
        <input
          type="text"
          value={dispositivoId}
          onChange={e => setDispositivoId(e.target.value)}
        />

        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={dispositivoName}
        
          onChange={e => setDispositivoName(e.target.value)}
        />

        <label htmlFor="">Marca:</label>
        <input
          type="text"
          placeholder={dispositivo?.marca}
          onChange={e => setDispositivoMarca(e.target.value)}
        />

        <label htmlFor="">Modelo:</label>
        <input
          type="text"
          placeholder={dispositivo?.modelo}
          onChange={e => setDispositivoModelo(e.target.value)}
        />

        <label htmlFor="">Cor:</label>
        <input
          type="text"
          placeholder={dispositivo?.cor}
          onChange={e => setDispositivoCor(e.target.value)}
        />

<label htmlFor="">Serial:</label>
        <input
          type="text"
          placeholder={dispositivo?.serial}
          onChange={e => setDispositivoSerial(e.target.value)}
        />

<label htmlFor="">Descrição:</label>
        <input
          type="text"
          placeholder={dispositivo?.descricao}
          onChange={e => setDispositivoDescricao(e.target.value)}
        />


        <button type="submit">Editar</button>
        <Link to="/dispositivo/1">Voltar</Link>
      </form>
    </div>
  )
}
export default Editar
