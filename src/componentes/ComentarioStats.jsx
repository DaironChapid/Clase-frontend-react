import {React, useContext, useState} from 'react';
import ComentariosContexto from '../contexto/ComentariosContexto';


const ComentarioStats = () => {

    const {coments} = useContext(ComentariosContexto)

    const totalComentarios = coments.length;
    
    const promedio = totalComentarios > 0 ? coments.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios : 0;

    return (
        <div>
            <h4>Total Comentarios: {totalComentarios}</h4>
            <h4>Promedio de Calificación: {promedio.toFixed(2)}</h4>
        </div>
    );
};

export default ComentarioStats;