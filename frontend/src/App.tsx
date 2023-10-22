import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from 'pages/Menu'
import Orcamento from 'pages/orcamento'
import Dispositivo from 'pages/dispositivo'
import Navbar from 'components/navbar'
import Cliente from 'pages/Cliente/'
import Busca from 'pages/Cliente/Busca'
import Cadastrar from 'pages/Cliente/Cadastrar'
import Atualizar from 'pages/Cliente/Atualizar'
import Excluir from 'pages/Cliente/Excluir'
import BuscaCodigo from 'pages/Cliente/Busca/BuscaCodigo'

import BuscaTodos from 'pages/Cliente/Busca/BuscaTodos'
import Servico from 'pages/servico'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/dispositivo">
          <Route path=":dispositivoId" element={<Dispositivo />} />
        </Route>
        <Route path="/orcamento">
          <Route path=":orcamentoId" element={<Orcamento />} />
        </Route>
        <Route path="/servico">
          <Route path=":servicoId" element={<Servico />} />
        </Route>
        <Route path="/cliente">
          <Route path=":clienteId" element={<Cliente />} />
          <Route path="/cliente/busca" element={<Busca />} />
          <Route path="/cliente/busca/buscaCodigo" element={<BuscaCodigo />} />
          <Route path="/cliente/busca/BuscaTodos" element={<BuscaTodos />} />
          <Route path="/cliente/cadastrar" element={<Cadastrar />} />
          <Route path="/cliente/atualizar" element={<Atualizar />} />
          <Route path="/cliente/excluir" element={<Excluir />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
