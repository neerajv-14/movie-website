const API_KEY = 'api_key=5d5713066ff408684f377a346fdbbfd7';
const BASE_URL='https://api.themoviedb.org/3';
const APIURL =BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMGPATH ='https://image.tmdb.org/t/p/w500';
const SEARCHAPI= BASE_URL + '/search/movie?&'+API_KEY+'&query=';


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();


  console.log(respData);
  
  showMovies(respData.results);

}

function showMovies(movies) {
  
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
   
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
       <img src="${IMGPATH + poster_path}" alt="${title}"/>
     
     <div class="movie-info">
         <h3>${title}</h3>
         <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        
     </div> 

     <div class="overview">

     <h2>Overview:</h2>
     ${overview}
     </div>
     `;

    main.appendChild(movieEl)
  });

}


function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red';
  }

}
function getGenre(genre) {
  if (genre === 28)
  return 'Action';
  else if (genre === 12)
  return 'Adventure';
  else if (genre === 16)
  return 'Animation';
  else if (genre === 35)
  return 'Comedy';
  else if (genre === 80)
  return 'Crime';
  else if (genre === 99)
  return 'Documentary';
  else if (genre === 18)
  return 'Drama';
  else if (genre === 10751)
  return 'Family';
  else if (genre === 14)
  return 'Fantasy';
  else if (genre === 36)
  return 'History';
  else if (genre === 27)
  return 'Horror';
  else if (genre === 10402)
  return 'Music';
  else if (genre === 9648)
  return 'Mystery';
  else if (genre === 10749)
  return 'Romance';
  else if (genre === 878)
  return 'Science Fiction';
  else if (genre === 10770)
  return 'TV Movie';
  else if (genre === 53)
  return 'Thriller';
  else if (genre === 10752)
  return 'War';
  else if (genre === 37)
  return 'Western';
  else
  return 'Unknown Genre';
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const searchTerm = search.value;

  if (searchTerm) {

    getMovies(SEARCHAPI + searchTerm);

    search.value = "";
  }
});