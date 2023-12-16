
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './components/requests';
import './assets/App.css';
function App() {
   
  return ( 
    
      <div className="apps" >
        <Nav />
        <Banner  />
        
        <Row title =" Netflix Originals" fetchURL={requests.fetchNetflixOriginals}
        isLargeRow /> 
        <Row  title ="Treding Now" fetchURL={requests.fetchTrending}/> 
        <Row  title ="Tot Rated " fetchURL={requests.fetchTopRated}/>
        <Row  title ="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row  title ="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row  title ="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row  title ="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row  title ="Documentaries" fetchURL={requests.fetchDocumentaries}/>
 
      </div>
  
  )
}

export default App
