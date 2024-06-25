import './styles.css';


const ExibirMensagem = (mensagem: string) => {
    const mensagemElemento = document.createElement('div')
    mensagemElemento.textContent=mensagem;

    const localParaExibir = document.getElementsByClassName('containerMensagem')[0];
if(localParaExibir){
  localParaExibir.appendChild(mensagemElemento)
}

  return(
    <div className='containerMensagem'>
    <p>mensagem:</p>
    </div>
  )
}
  export default ExibirMensagem