import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
const PortfolioItem = ({ title, imgUrl, description,projectLink}) => {
  return (
    <div className='flex flex-col w-full cursor-pointer shadow   bg-[#000] p-5' onClick={() =>{
      Router.push(`${projectLink}`)
    }}>
      <div className="w-full">
        <Image src={imgUrl} alt={title} placeholder="blur" layout="responsive" blurDataURL={imgUrl} height={250} width={300} className="w-full sm:auto"/>
      </div>
      <div className='p-2'>
        <h3 className="text-[22px] sm:text-[30px]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PortfolioItem