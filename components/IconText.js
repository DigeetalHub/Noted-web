import Image from 'next/image'
import React from 'react'

const IconText = ({src, alt, text, className, textClassName, imgClassName}) => {
  return (
      <div className={`${className} flex flex-col`}>
          <div className={`${imgClassName} p-2 rounded w-[fit-content] mx-auto md:p-4`}>
              <Image src={src} alt={alt} className="md:w-[32px] md:h-[32px]" />
          </div>
          <p className={textClassName}>{text}</p>
    </div>
  )
}

export default IconText