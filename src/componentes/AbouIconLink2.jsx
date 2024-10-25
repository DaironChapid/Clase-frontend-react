import React from 'react'
import { FaHome, FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink2 = () => {
  return (
    <div className='Fa-home'>
        <Link to ="/">
        <FaHome size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink2