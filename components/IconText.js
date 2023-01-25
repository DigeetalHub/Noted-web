import Image from 'next/image'
import React from 'react'

const IconText = ({src, alt, text, className, imgClassName}) => {
  return (
      <div className={className}>
          <div className={imgClassName}>
              <Image src={src} alt={alt} />
          </div>
          <p className={className}>{text}</p>
    </div>
  )
}

export default IconText