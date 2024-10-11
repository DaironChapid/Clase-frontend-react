import React from 'react'
import ComentarioItem from './ComentarioItem'
function ComentarioLista({coments , 
                        handleDelete
                        }) {



    if (coments.length === 0 || !coments ){
        return <p>No hay comentarios</p>
    }else{
        return (
            <div className='container'>
                <div className='comments'>
                    <ul>
                        {
                            coments.map(comentario => 
                            <ComentarioItem 
                                        key={comentario.id}  
                                        comentario={comentario.comentario}
                                        calificacion={comentario.calificacion}
                                        id = { comentario.id }
                                        handleDelete = { handleDelete }
                                />
                            )
                        }
                    </ul>
                </div>
                
            </div>
          )
    }


  
}

export default ComentarioLista