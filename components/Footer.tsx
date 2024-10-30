import { link } from 'fs'
import React from 'react'
import { leftlink, rightlink } from '@/data'


const Footer = () => {
  return (
    <div className='bg-[#f6f6f6ce]'>
        <p className='text-sm pl-10 pr-10 h-12 flex items-center border-b border-black'>Philippines</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pl-10 pr-10 h-12 items-center '>

            <div className='flex space-x-10 md:space-x-5 justify-center md:justify-normal lg:justify-normal '>
              {
                leftlink.map(leftlink => (
                  <a className='text-sm hover:underline' href={leftlink.link}>{leftlink.name}</a>
                ))
              }
            </div>

            <div className='flex space-x-10 justify-center md:justify-end lg:justify-end '>
            {
                rightlink.map(rightlink => (
                  <a className='text-sm hover:underline' href={rightlink.link}>{rightlink.name}</a>
                ))
              }
            </div>

        </div>
    </div>
  )
}

export default Footer