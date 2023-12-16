import axios from "axios"; // http based promise resolution which uses await and asynchronous code

const instance = axios.create({
    
    baseURL: "https://api.themoviedb.org/3",
});

//  instance.get("/movie/top_rated");
 //get or fetch data based on this url and fetch from hhtps://api.themoviedb.org/3/movie/top_rated

export default instance;