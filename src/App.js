import Head from './Head/Head'
import {Main,MoviList} from './Tags/Tags'
function App() {
  const topMovies = [{movieName:'Bahubali', moviePoster:'https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg', movieDuration:'2 hours'},
    {movieName:'Bellbottom', moviePoster:'https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/akshay-kumar-finishes-shoot-of-bell-bottom-202010-1601555182.jpg', movieDuration:'3 hours'},
    {movieName:'Delhi 6', moviePoster:'https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810', movieDuration:'2.5 hours'},
    {movieName:'Ram Shyam', moviePoster:'https://m.media-amazon.com/images/M/MV5BMTMyMTE4MTMyOV5BMl5BanBnXkFtZTcwNTU5OTkyMg@@._V1_.jpg', movieDuration:'1.5 hours'},
    {movieName:'Luca', moviePoster:'https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg?region=0%2C0%2C540%2C810', movieDuration:'2 hours'}]
  return (
    <div className="App">
     <Head></Head>
     <Main>
       <ul className='main-container'>
         {
         topMovies.map((ele, index)=>(
           <MoviList key={index} movieName={ele.movieName} moviePoster={ele.moviePoster} movieDuration={ele.movieDuration}></MoviList>
         ))
         }
         
       </ul>
     </Main>
    </div>
  );
}

export default App;
