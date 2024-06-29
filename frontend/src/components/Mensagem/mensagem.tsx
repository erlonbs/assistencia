import { useEffect, useState } from 'react';
import './styles.css';


const ExibirMensagem = ({ mensagem }: { mensagem: string }) => {
  const [showMensage, setShowMessage] = useState(false);


  useEffect(() => {

    if (mensagem) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false);
      }, 3000)
    }
  }, [mensagem]);

  return (
    <>
      {showMensage && (
        <div className='mensagem'>
          {mensagem}
        </div>
      )}

    </>
  )
}
export default ExibirMensagem

