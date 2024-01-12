import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from 'pages/Menu'

import Dispositivo from 'pages/dispositivo'
import NovoDispositivo from 'pages/dispositivo/novo'
import Editar from 'pages/dispositivo/editar'
import Listar from 'pages/dispositivo/listar'
import ExcluirDispositivo from 'pages/dispositivo/excluir'
import Navbar from 'components/navbar'
import Cliente from 'pages/Cliente/'
import Busca from 'pages/Cliente/Busca'
import Cadastrar from 'pages/Cliente/Cadastrar'
import Atualizar from 'pages/Cliente/Atualizar';
import Excluir from 'pages/Cliente/Excluir';
import BuscaCodigo from 'pages/Cliente/Busca/BuscaCodigo';

import BuscaTodos from 'pages/Cliente/Busca/BuscaTodos';

import Servico from 'pages/servico';
import Orcamento from 'pages/orcamento';
import NovoOrcamento from 'pages/orcamento/novo';
import ListarOrcamento from 'pages/orcamento/listar';
import EditarOrcamento from 'pages/orcamento/editar';
import ExcluirOrcamento from 'pages/orcamento/excluir';
import NovaOrdemServico from 'pages/servico/novo';
import ListarOrdemServico from 'pages/servico/listar';
import Footer from 'components/footer';
import EditarOrdemServico from 'pages/servico/editar'
import ExcluirServico from 'pages/servico/excluir'
import DetalharOrdemServico from 'pages/servico/listar/detalhar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/dispositivo">
          <Route path=":dispositivoId" element={<Dispositivo />} />
          <Route path="/dispositivo/novo" element={<NovoDispositivo/>}/>
          <Route path="/dispositivo/listar" element={<Listar/>}/>
          <Route path="/dispositivo/editar" element={<Editar/>}/>
          <Route path='/dispositivo/excluir' element={<ExcluirDispositivo/>}/>
        </Route>

        <Route path="/orcamento">
          <Route path=":orcamentoId" element={<Orcamento />} />
          <Route path="/orcamento/novo" element={<NovoOrcamento/>}/>
          <Route path="/orcamento/listar" element={<ListarOrcamento/>}/>
          <Route path="/orcamento/editar" element={<EditarOrcamento/>}/>
          <Route path='/orcamento/excluir' element={<ExcluirOrcamento/>}/>
        </Route>

        <Route path="/servico">
          <Route path=":servicoId" element={<Servico />} />
          <Route path='/servico/novo' element={<NovaOrdemServico/>}/>
          <Route path='/servico/listar' element={<ListarOrdemServico/>}/>
          <Route path='/servico/editar' element={<EditarOrdemServico/>}/>
          <Route path='/servico/excluir' element={<ExcluirServico/>}/>          
          <Route path='/servico/listar/detalhar/:id' element={<DetalharOrdemServico/>}/>
        </Route>

        <Route path="/cliente">
          <Route path=":clienteId" element={<Cliente />} />
          <Route path="/cliente/busca" element={<Busca />} />
          <Route path="/cliente/busca/buscaCodigo" element={<BuscaCodigo />} />
          <Route path="/cliente/busca/BuscaTodos" element={<BuscaTodos />} />
          <Route path="/cliente/cadastrar" element={<Cadastrar />} />
          <Route path="/cliente/atualizar" element={<Atualizar />} />
          <Route path="/cliente/excluir" element={<Excluir/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>   
  )
}

export default App
