import { useEffect, useState } from 'react';
import './styles.css';


const ExibirMensagem = ({mensagem, mensagemType}: { mensagem: string, mensagemType: 'sucesso' | 'erro' }) => {
  const [showMenssage, setShowMessage] = useState(false);


  useEffect(() => {

    if (mensagem) {
      setShowMessage(true)   
      setTimeout(() => {
        setShowMessage(false);
      }, 4000)
    }
  }, [mensagem]);

  return (
    <>
      {showMenssage && (
        <div className={`mensagem ${mensagemType}`}>
          {mensagem}
        </div>
      )}

    </>
  )
}
export default ExibirMensagem

