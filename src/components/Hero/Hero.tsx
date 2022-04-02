import React from 'react'

import './Hero.styles.sass'

const Hero: React.FC = () => {
  return (
    <div className='hero'>
        <h4 className='hero-title'>Personal website of Hristijan Gjorgjioski</h4>
        <div className='hero-personal__info'>
            <span className='hero-personal__info-location'>Prilep, Macedonia</span>
            <span className='hero-personal__info-email'>hristijangorgioski503@gmail.com</span>
            <span className='hero-personal__info-number'>+38971216813</span>
        </div>
    </div>
  )
}

export default Hero