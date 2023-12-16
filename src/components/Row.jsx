
import React, { useEffect, useState } from 'react';
import '../assets/Row.css';
import axios from './axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url ="https://image.tmdb.org/t/p/original/";
 

function Row({title, fetchURL, isLargeRow })
 {
    
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
           // console.log(fetchURL);
             console.log(request.data);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL],
    // console.log([fetchURL])
   
    );

    // console.log(movies)
  
    const handleClick =(movie) => {

        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
          autoplay: 1,
      },
  };
  
 
  return (
    <div className="row">
    <h1>{title}</h1>
   
      <div className="row__posters">
        
        {movies?.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="missed movie"
            
          />
        ))}
      </div>

    <div style={{padding:"40px"}}>

    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
    </div>
  )
}

export default Row