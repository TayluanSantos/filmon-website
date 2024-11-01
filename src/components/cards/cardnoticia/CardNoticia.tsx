import React from 'react'

interface CardNoticiaProps {
  foto:string;
  titulo:string;
  descricao:string;
}
function CardNoticia({foto,titulo,descricao}:CardNoticiaProps) {
  return (
    <div className='flex flex-col md:flex-row gap-x-5 border-b border-slate-600 py-4'>
      <div className='overflow-hidden'>
        <img src={foto} alt="" className='w-full md:w-44 h-40 object-cover mb-2 lg:mb-0' />
      </div>
      <div className=' flex flex-col gap-y-3 justify-between max-w-[650px]'>
        <h2 className='text-yellow-500 text-2xl font-bold'>{titulo}</h2>
        <p className='text-slate-300 text-md'>{descricao}</p>
        <p className='text-xs text-slate-300'>27 de outubro de 2024</p>
      </div>
    </div>
  )
}

export default CardNoticia