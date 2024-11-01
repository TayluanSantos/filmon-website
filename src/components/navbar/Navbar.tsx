import { Aperture, Plus } from '@phosphor-icons/react'
import Button from '../button/Button'

function Navbar() {
  return (
    <header className='text-white text-sm p-4 '>
      <div>
        <nav className='flex justify-around items-center'>
          <div className='flex items-center'>
            <Aperture size={32} color='#FFF'/>
            <p className='ml-2 font-bold text-base uppercase'><span className='text-yellow-400'>Film</span>On</p>
          </div>
          <ul className='flex cursor-pointer'>
            <li className='px-3 hover:underline decoration-yellow-400 underline-offset-8 '>
              <a href="#alta">Em Alta</a>
            </li>
            <li className='px-3 hover:underline decoration-yellow-400 underline-offset-8 '>
              <a href="#noticias">Noticias</a>
            </li>
            <li className='px-3 hover:underline decoration-yellow-400 underline-offset-8 '>
              <a href="#cartaz">Críticas</a>
            </li>
            <li className='px-3 hover:underline decoration-yellow-400 underline-offset-8 '>
              <a href="#cartaz">Em Cartaz</a>
            </li>
          </ul>
          <div className='flex items-center gap-x-4 cursor-pointer'>
            <div className='flex items-center hover:underline decoration-yellow-400 underline-offset-8'>
              <Plus size={20} weight="bold" color='#FACC15' />
              <span className='ml-2 '>WatchList</span>
            </div>
            <Button nome='Login'/>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar