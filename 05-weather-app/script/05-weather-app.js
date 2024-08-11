

// console.log('Weather app');


const APIKEY = '6eada7deead428c02f8ff63626d07739';

const url = (cityLocation) => 
  `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=${APIKEY}`;


async function getWeatherByCityLocation(cityLocation) {

  const resp = await fetch(url(cityLocation),{origin:'cors'});

  const respData = await resp.json();

  console.log(respData);

  console.log(ktoC(respData.main.temp));
  
}

getWeatherByCityLocation('Halmstad');

function ktoC (K) {

  return (K-273.15).toFixed(1);

}

