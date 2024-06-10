import './styles.css';


const ExibirMensagem = (mensagem: string, responseData: any) => {
    const mensagemElemento = document.createElement('div')
    mensagemElemento.textContent = mensagem

    const localParaExibir = document.getElementById('menssagem')
    localParaExibir?.appendChild(mensagemElemento)

    console.log('Dados da resposta: ' + responseData)
  }

  export default ExibirMensagem