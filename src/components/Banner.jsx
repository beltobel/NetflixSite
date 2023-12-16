
import React, { useEffect, useState } from 'react'
import '../assets/Banner.css'
import axios from './axios'
import requests from './requests'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request?.data.results [Math.floor(Math.random() * request.data.results.length)] );
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie); 
    function truncate(str, n) {
        return str?.length > n? str.substr(0, n-1) + "...": str;
    }
  return (
    <header
    className="banner"
    style={{
        backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: "center center",
    }}
    >
    
    <div className='banner__contents'>
        <div className="banner__title">
        {/* {movie?.title || movie?.name || movie?.original_name} */}
            <img className='title__logo ' src="https://occ-0-6422-1490.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeYcj1BAClb85xNmEgf2XubTFihigfk_eSXOEZV4V2qWtfdGt56lgUBxlPbNREW5_p_A3M8K5sH-zC-4IkAjiugG3mnsWcoLiK5GBv9QaFsLZ8kj2qpadv04M_zSFe8IwvwVrxfnr29oA2a_JPhrro1tJPEEhWlNTezD22wro41H6Ulo5oWlWw.webp?r=aaf" alt="" />
        </div>


        <h3 className="banner__description">
            
            {truncate(movie?.overview, 150)}
        </h3>

        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        
    </div>
        
<div className='banner__fadeBottom'></div>

    </header>
  );
}

export default Banner