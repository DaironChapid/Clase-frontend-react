import {React , useState } from 'react'

const ComentarioItem = ({comentario , calificacion}) => {

    //manejo del estado de un comentario:
    //comentario y calificacion como atributos
    //mediante el suo de estados 
    const [ coment, setComent ] = useState(comentario)
    const [rating, setRating] = useState(calificacion)

    const cambiarRating = () => {
        setRating((prev)=> prev + 1 )
    }

  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{coment}</div>
        <button onClick={cambiarRating}>
            cambiar calificacion
        </button>
        
        
    </div>
  )
}

export default ComentarioItem