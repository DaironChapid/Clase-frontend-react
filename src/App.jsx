import {React,  useState } from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
function App() {

    const  [coments , setComents] = useState(comentarios)

    const borrarItem = id => {
        if (window.confirm(
                "Está seguro de borrar el comentario?")){
            // asignar nuevo estado a comments:
            // filter: para quitar los comentarios
            // cuyo id concuerde con el parametro 
            setComents(coments.filter((c)=> c.id !== id ))

        }
    }
    

    const titulo = "App de Comentarios";
    const Autor = "Dairon Moreno"
    const ficha = "2902093"
    const centro_formacion = "CGMLTI"


    const loading = false ;
    if (loading === true ) return (<h1>cargando comentarios </h1>)
    
  return (
    
    <div className='container'>
        <Header 
        titulo={titulo} 
        autor={Autor} 
        ficha={ficha} 
        centro={centro_formacion}  />
        <ComentarioForm></ComentarioForm>
        <ComentarioStats comentarios={coments} />
        <ComentarioLista
        coments={coments} 
        handleDelete = {borrarItem} />
    </div>
  )
}

export default App;