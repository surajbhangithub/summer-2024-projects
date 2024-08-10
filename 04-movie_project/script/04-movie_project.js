

//console.log('Hi From Default 04');

const APIKEY = '04c35731a5ee918f014970082a0088b1';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=';

const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


// Get latest movies
getMoviesData(APIURL);



async function getMoviesData(url) {

  const response = await fetch(url);

  const responseData = await response.json();

  console.log(responseData);

  showMovies(responseData.results);

  /* responseData.results.forEach((movie) => {

    //console.log(movie);

    const img = document.createElement('img');
    img.src = IMGPATH + movie.poster_path;

    //console.log(img);

    document.body.appendChild(img);

    //console.log(img);
    
  }); */

  
  
}


function showMovies (movies) {

  // clean main 

  main.innerHTML = '';

  movies.forEach(movie => {

    const { poster_path, title, vote_average, overview} = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');


    movieEl.innerHTML = `
      <img
          src="${IMGPATH + poster_path}"
          alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByVoteAverage(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview"><h4>Overview</h4>${overview}</div>
      `;

    main.appendChild(movieEl);

    // console.log(movieEl);
    
  });

  // return responseData;

}



function getClassByVoteAverage(votes) {

  if (votes >= 7.5 ) {

    return 'green';

  } else if (votes >= 5) {

    return 'orange';

  } else{

    return 'red';

  }

}



form.addEventListener('submit', (e) => {

  e.preventDefault();

  console.log(e);
  console.log(search);

  const searchTerm = search.value;

  if(searchTerm) {

    console.log(searchTerm);

    getMoviesData(SEARCHAPI + searchTerm);

    search.Value ='';

}

})




