import React from 'react'
import Card from '../componentes/Card'

const About = ({titulo, autor, ficha, centro}) => {
  return (
    <Card>
      <div className='about'>
        <h1>Acerca de este proyecto</h1>
        <p><b>titulo:</b> {titulo}</p>
        <p><b>autor:</b> {autor}</p>
        <p><b>ficha:</b> {ficha}</p>
        <p><b>centro de formacion:</b> {centro}</p>
        <p><b>Version:</b>1.0.0</p>
        <p><a href='/'>Volver a pagina principal</a></p>
      </div>
    </Card>
  )
}

export default About