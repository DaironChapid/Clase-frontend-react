import {React,  useState } from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
function App() {

    const  [coments , setComentarios] = useState(comentarios)


    const titulo = "App de Comentarios";
    const Autor = "Dairon Moreno"
    const ficha = "2902093"
    const centro_formacion = "CGMLTI"


    const loading = false ;
    const showComments = true;
    if (loading === true ) return (<h1>cargando comentarios </h1>)
    
  return (
    
    <div className='container'>
        <Header titulo={titulo} autor={Autor} ficha={ficha} centro={centro_formacion}  />
        
        {showComments && 
            (
                <div className='comments'>
            <h3>comentarios: {comentarios.length} </h3>
            <ul>
                {
                    coments.map(comentario => 
                      <ComentarioItem 
                                key={comentario.id}  
                                comentario={comentario.comentario}
                                calificacion={comentario.calificacion}
                                
                        />
                    )
                }
            </ul>
        </div>
            )
        
         }
        
    </div>
  )
}

export default App