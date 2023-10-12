const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

console.log(cities);

const button = document.querySelector(".search");
console.log(button);
const resultat = document.querySelector(".suggestions");
console.log(resultat);
function findMatches(imput, cityArray){
    const regex = new RegExp(this.value, "gi");
    const matched = cityArray.filter(place => {
        place.state === this.value ||
        place.city === this.value;
    })
}

findMatches();
