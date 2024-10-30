import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-4/5 lg:w-[600px] md:w-[600px] border border-black rounded-full flex justify-center items-center'>
      
      <img src='/magnify.svg' className='w-4 h-4 ml-2 mr-2'></img>

      <input className="w-full h-full outline-none pt-3 pb-3" type='text'></input>

      <img src='/voice.svg' className='w-8 h-8 ml-2 mr-2'></img>
      <img src='/lens.svg' className='w-8 h-8 ml-2 mr-2'></img>
      
    </div>
  )
}

export default Searchbar