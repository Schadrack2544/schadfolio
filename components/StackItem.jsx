import React from 'react'
import Image  from 'next/image'
const StackItem = ({ title,stackUrl}) => {
  return (
    <div className='flex flex-col gap-5 h-[400px]'>
        <Image src={stackUrl} alt={title} height={300}  width={300} blurDataURL={stackUrl}/>
        <h3 className="text-[24px] text-black  text-center">{title}</h3>
    </div>
  )
}

export default StackItem