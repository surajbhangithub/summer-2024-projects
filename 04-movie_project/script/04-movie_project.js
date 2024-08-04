

//console.log('Hi From Default 04');

const APIKEY = '04c35731a5ee918f014970082a0088b1';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function getMoviesData() {

  const response = await fetch(APIURL);

  const responseData = await response.json();

  console.log(responseData);

  responseData.results.forEach((movie) => {

    //console.log(movie);

    const img = document.createElement("img");
    img.src = IMGPATH + movie.poster_path;

    //console.log(img);

    document.body.appendChild(img);

    //console.log(img);
    
  });

  return responseData;
  
}

getMoviesData();