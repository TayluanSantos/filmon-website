import { Aperture, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-yellow-500 p-8'>
      <div className='grid grid-cols-3 place-items-center'>
        <div>
          <div className='flex items-center'>
            <Aperture size={32} color='#000000'/>
            <p className='ml-2 font-bold text-2xl uppercase text-black'>FilmOn</p>
          </div>
        </div>
        <div>
        <ul className='cursor-pointer text-sm'>
            <li className='px-3 hover:underline decoration-black'>
              <a href="#alta">Em Alta</a>
            </li>
            <li className='px-3 hover:underline decoration-black'>
              <a href="#noticias">Noticias</a>
            </li>
            <li className='px-3 hover:underline decoration-black'>
              <a href="#cartaz">Críticas</a>
            </li>
            <li className='px-3 hover:underline decoration-black'>
              <a href="#cartaz">Em Cartaz</a>
            </li>
          </ul>
        </div>
        <div className='text-sm'>
          <span>Redes Sociais</span>
          <div className='flex gap-x-1 justify-center'>
            <LinkedinLogo size={32} className='hover:text-white cursor-pointer'/>
            <GithubLogo size={32} className='hover:text-white cursor-pointer'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer