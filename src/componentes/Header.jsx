import React from 'react'

const Header = ({autor , titulo , ficha , centro}) => {

    const headerStyles = {
        backgroundColor: 'rgba(0, 0, 0,0.4)',
        color: '#045abc'
    }
    const Autor = {
        backgroundColor: 'rgba(0, 0, 0,0.4)',
        color: 'red'
    }

    const Ficha = {
        backgroundColor: 'rgba(0, 0, 0,0.4)',
        color: 'green'
    }

    const Centro = {
        backgroundColor: 'rgba(0, 0, 0,1)',
        color: 'pink'
    }

  return (
    <header >
    <div className='container'>
        {titulo}
        <p style={Autor}>Autor: {autor}</p>
        <p style={Ficha}>Ficha: {ficha}</p>
        <p style={Centro}>Centro de Formacion: {centro}</p>
    </div>
    </header>
  )
}

export default Header