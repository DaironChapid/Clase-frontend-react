import {React,  useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './componentes/Header';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './paginas/About';
import AboutIconLink from './componentes/AboutIconLink';
import AboutIconLink2 from './componentes/AbouIconLink2';
import { ComentariosProvider } from './contexto/ComentariosContexto';


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
    
    const  addComentario = (newComentario) => {
      //utilice el operador spread
      //para añadir el newComentario 
      //a la lista de comentarios(comments)  
      setComents( prevComents => [...prevComents, newComentario])
    }


  return (
    <ComentariosProvider>
    <Router>
    <div className='container'>
        <Header 
        titulo={titulo} 
        autor={Autor} 
        ficha={ficha} 
        centro={centro_formacion}  />
        <Routes>
          <Route exact path='/' element={
            <>
              <ComentarioForm handleAdd={addComentario}   />
              <ComentarioStats comentarios={coments} />
              <ComentarioLista />
              <AboutIconLink />
              
              
            </>} >
          </Route>

          <Route path='/about' element={
            <>
                 <About 
                  titulo={titulo} 
                  autor={Autor} 
                  ficha={ficha}
                  centro={centro_formacion}/>
                  <AboutIconLink2 />
            
            </>
           
            } 
            />
           
            
            
        
        </Routes>
        
        
    </div>
    </Router>
    </ComentariosProvider>
  )
}

export default App;