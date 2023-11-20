import './dispositivoStyles.css'

//import { Dispositivos } from 'types/dispositivo'

function Dispositivo() {
  return (
    <body className="containerDispositivo">

      <h1 className='containerTitulo'>Dispositivos</h1>

      <form className='btnDispositivo'>
       
        <a href="/dispositivo/novo">
          <input className='btnDispositivo' type="button" value="Novo" />
        </a>
        <a href="/dispositivo/listar">
          <input className='btnDispositivo' type="button" value="Listar" />
        </a>
        <a href="/dispositivo/editar">
          <input className='btnDispositivo' type="button" value="Editar" />         
        </a>

        <a href="/dispositivo/excluir">
          <input className='btnDispositivo' type="button" value="Excluir" />
        </a>

        <a href="/">
          <input className='btnDispositivo' type="button" value="Voltar" />
        </a>
      </form>
    </body>
  )
}
export default Dispositivo
