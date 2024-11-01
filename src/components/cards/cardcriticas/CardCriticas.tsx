import React from 'react'
interface CardCriticasProps {
  foto:string;
  genero:string;
  titulo:string;
}
function CardCriticas({foto,genero,titulo}:CardCriticasProps) {
  return (
    <div className='w-[500px] rounded-lg overflow-hidden cursor-pointer bg-[#1a191c] '>
      <div className='overflow-hidden'>
        <img src={foto} alt="foto do poster" className='w-full h-56 object-cover hover:scale-125 transition duration-300 ease-in-out' />
      </div>
      <div className='p-4'>
        <span className='text-xs text-slate-400'>{genero}</span>
        <h2 className='text-md text-white'>{titulo}</h2>
      </div>
    </div>
  )
}

export default CardCriticas