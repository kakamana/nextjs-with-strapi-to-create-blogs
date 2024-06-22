import React from 'react'

const InfoBlock = ( {data} ) => {
    const { headline, text, button, reversed } = data;
  return (
    <div className={`info ${reversed ? "info--reversed" : ""}`}>
        <img className='info__image' src='/assets/info-blocks/hero-experience.png' alt='' />
        <div className="info__text">
            <h2 className='info__headline'>{headline}</h2>
            {text}
            {button}
        </div>
    </div>
  )
}

export default InfoBlock