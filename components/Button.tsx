import React from 'react'

type ButtonProps = {
  ButtonText: string;
  Href: string;
}

const Button = ({ ButtonText, Href } : ButtonProps) => {
  return (
    <button>
      <a className='text-sm p-2 bg-[#f6f6f6ce] border-black rounded-md hover:drop-shadow-lg hover:border ' href={Href}> {ButtonText} </a>
    </button>
  )
}

export default Button