import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './Carrossel.css';
import Button from '../button/Button';

function Carrossel() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative container mx-auto rounded-lg '>
            <div className='absolute top-[20%] left-[10%] max-w-[850px]'>
              <h2 className='text-6xl font-bold mb-2'>A Origem dos Robôs Gigantes</h2>
              <p className='mb-4'>
                O Início mergulha nas origens épicas da batalha entre Autobots e Decepticons. 
                Quando uma antiga fonte de poder é descoberta na Terra, heróis robóticos e vilões se enfrentam em uma luta pela sobrevivência. 
              </p>
              <Button nome='Assista Agora'/>
            </div>
            <img src="https://ik.imagekit.io/iixrkkdfp/movie-blog/rRcZaaZ6sHLsEi58WxU3rJZZ70b.jpg?updatedAt=1727563733383" alt="" className='w-full object-cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative container mx-auto rounded-lg '>
            <div className='absolute top-[20%] left-[10%] max-w-[850px]'>
              <h2 className='text-6xl font-bold mb-2'>Longlegs - O Horror Sobrenatural Ganha Vida</h2>
              <p className='mb-4'>
                Em Longlegs, o detetive Sam Heller investiga uma série de assassinatos brutais, apenas para descobrir uma força sobrenatural por trás dos crimes. 
                À medida que o mistério se aprofunda, ele enfrenta uma entidade sombria que desafia sua compreensão e coloca sua sanidade em risco.
              </p>
              <Button nome='Assista Agora'/>
            </div>
            <img src="https://ik.imagekit.io/iixrkkdfp/vWHcppr5MXVh3ulbG3njM3aaCDx.jpg?updatedAt=1727562520962" alt="" className='w-full  object-cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative container mx-auto rounded-lg'>
            <div className='absolute top-[20%] left-[10%] max-w-[850px]'>
              <h2 className='text-6xl font-bold mb-2'>O Retorno do Fantasma Caótico</h2>
              <p className='mb-4'>
                Na aguardada sequência, Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice, 
                o excêntrico e travesso Beetlejuice retorna para causar mais confusão. Agora,
                ele tenta ajudar uma nova geração de fantasmas a recuperar sua casa assombrada de um grupo de intrusos indesejados.
              </p>
              <Button nome='Assista Agora'/>
            </div>
            <img src="https://ik.imagekit.io/iixrkkdfp/movie-blog/xFwywIwkow56WPKdUAAPYDZS6OB.jpg?updatedAt=1727563153460" alt="" className='w-full  object-cover' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carrossel