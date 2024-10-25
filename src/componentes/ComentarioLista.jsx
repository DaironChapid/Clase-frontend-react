import {React, useContext} from 'react'
import ComentarioItem from './ComentarioItem'
import { AnimatePresence, motion } from 'framer-motion'
import ComentariosContexto from '../contexto/ComentariosContexto'


function ComentarioLista() {

        const { coments } = useContext (ComentariosContexto)

    if (coments.length === 0 || !coments ){
        return <p>No hay comentarios</p>
    }else{
        return (
                <AnimatePresence>
                

                <div className='comments'>
                    <ul>
                        {
                            coments.map(comentario => 
                                <motion.div
                                    key={comentario.id}
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                      }}
                                
                                >
                                      
                                    
                                    <ComentarioItem 
                                            key={comentario.id}  
                                            comentario={comentario}
                                            
                                            
                                    />
                                </motion.div>
                            )
                        }
                    </ul>
                </div>

                </AnimatePresence>    
            
          )
    }


  
}

export default ComentarioLista