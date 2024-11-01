import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './CarrosselCartaz.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardFilmes from '../cards/cardfilmes/CardFilmes';

interface MovieType {
  poster_path:string;
  title:string;
  vote_average:number
}

function CarrosselCartaz() {
  const [upcomingMovies,setUpcomingMovies] = useState<MovieType[]>([]);
  const getUpComingMovies = async () => {
    await axios({
      method:'get',
      url:'https://api.themoviedb.org/3/movie/upcoming',
      params: {
        api_key:'a0893bf64ffda98a803dcaf75c7928d5',
        language:'pt-BR'
      }
    }).then(response => {
      setUpcomingMovies(response.data.results)
    })
  }

  useEffect(() => {
    getUpComingMovies()
  },[upcomingMovies.length]);

  return (
    <>
        <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
         {upcomingMovies.map((movie) => (
          <SwiperSlide>
             <CardFilmes foto={`https://image.tmdb.org/t/p/original${movie.poster_path}`} nome={movie.title} nota={movie.vote_average} />
          </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default CarrosselCartaz