import { createContext, useState} from 'react'
// Crear contexto

const ComentariosContexto = createContext()
//crear Rprovider: para que el estado
// se reconozca en todo comonente 

export const ComentariosProvider = ({ children }) => {

const  [coments , setComents] = useState([
    {
    id:1,
    comentario: "Este es el comentario de contexto 1",
    calificacion: 3
}
])

const borrarItem = id => {
    if (window.confirm(
            "Está seguro de borrar el comentario?")){
        // asignar nuevo estado a comments:
        // filter: para quitar los comentarios
        // cuyo id concuerde con el parametro 
        setComents(coments.filter((c)=> c.id !== id ))

    }
}

return <ComentariosContexto.Provider
 value={{ coments,
         setComents, 
         borrarItem}}>
{ children }
    </ComentariosContexto.Provider>
}

export default ComentariosContexto;