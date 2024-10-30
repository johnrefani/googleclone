import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-end space-x-5 items-center p-4'>
        <p className='text-sm hover:underline p-0'>Gmail</p>
        <p className='text-sm hover:underline p-0'>Images</p>
        <img src='/menu.svg' alt='menu' className='h-6 w-6 hover:drop-shadow-sm'></img>
        <img src='/profile.svg' alt='profile' className='h-8 w-8'></img>
    </div>
  )
}

export default Header