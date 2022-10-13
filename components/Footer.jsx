import React from 'react'

const Footer = () => {
  return (
    <div className='text-red-600  text-[20px]  text-center pl-5 cursor-pointer' onClick={() =>{
      window.location.href = 'http://www.schadsoft.epizy.com';
    }}>Powered by Schadsoft &copy; {new Date().getFullYear()}</div>
  )
}

export default Footer