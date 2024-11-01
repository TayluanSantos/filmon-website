import { Star } from '@phosphor-icons/react';

interface CardCriticaProps {
  foto:string;
  nome:string;
  nota:number
}

function CardFilmes({foto,nome,nota}:CardCriticaProps) {
  return (
    <div className='text-white flex flex-col gap-y-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>
      <img src={foto} alt="" className='rounded-lg object-center object-cover w-[300px] h-80'/>
      <span>{nome}</span>
      <div className='flex items-center gap-x-1'>
        <Star color='#eab308' fill='#eab308'/>
        <span className='text-yellow-500'>Nota: {nota.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default CardFilmes