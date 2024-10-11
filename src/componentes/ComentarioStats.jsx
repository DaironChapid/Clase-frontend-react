import React from 'react'
import comentarios from '../data/Comentarios'
const ComentarioStats = ({ Comentarios }) => {
const comentariostotales = comentarios.length

  return (
    <div className='feedback-stats'>
        {/* El numero de comentarios que hay
        en el arreglo de comentarios  */}
    <h4>  Comentarios: {comentariostotales} </h4>
        {/* El promedio de calificaciones
        de los comentarios en e arreglo reduce
        */}
    <h4>  Calificacion promedio  </h4>
    </div>
  )
}

export default ComentarioStats