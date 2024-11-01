import React from 'react'

interface ButtonProps {
  nome:string;
}

function Button({nome}:ButtonProps) {
  return (
    <button className='py-2 px-6 text-black rounded-lg bg-yellow-400 hover:scale-105 hover:transition duration-300 ease-in-out'>{nome}</button>
  )
}

export default Button