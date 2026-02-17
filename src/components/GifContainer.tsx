import React from 'react'

const GifContainer = ({gifUrl,className}) => {
  return (
    <div className={`w-full h-[85%] flex justify-center  items-center ${className}`}>
      <img src={gifUrl} alt="GIF"  className='h-full'/>
    </div>
  )
}

export default GifContainer
