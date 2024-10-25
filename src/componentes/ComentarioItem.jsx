import {React , useState, useContext } from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'
import ComentariosContexto from '../contexto/ComentariosContexto'

const ComentarioItem = ({comentario}) => {

    //desestrecturar: tomar un objeto y 
    // separar un atributo del obeto


    const{borrarItem}= useContext()

    const [ coment, setComent ] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [ identificacion , setIdentificacion ] = useState(comentario.id)

   

  return (
    <Card reverse={false}>
        <div className='num-display'>{rating}</div>
        <button 
        onClick={ () => borrarItem(identificacion)}
          className='close'
          >
        <FaTimes color='purple' />
        </button> 
        <div className='text-display'>{coment}</div>
    </Card>
  )
}

export default ComentarioItem