function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((pokemonList) => {
      console.log(pokemonList);
      document.querySelector(".banner").innerHTML = "";
      pokemonList.results.forEach((pokemon) => {
        console.log(pokemon);

        document.querySelector(
          ".banner"
        ).innerHTML += `<button onclick="getData('${pokemon.url}')">${pokemon.name}</button>;`;
      });
      document.querySelector(".banner").innerHTML += `
      <button onclick="getPokemonList('${pokemonList.previous}')">Previous</button>
      <button onclick="getPokemonList('${pokemonList.next}')">Next</button>
    `;
    });
}

getPokemonList("https://pokeapi.co/api/v2/pokemon/");

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#charizard").innerHTML = `
        <img src=${data.sprites.front_default} alt="">
        <h1 class="word">${data.name}</h1>
        <h2 class="word">${data.weight}</h2>
        <h3 class="word">${data.height}</h3>
        <ul class="word">
        <li class="word">${data.abilities[0].ability.name}</li>

        </ul>
        <ul class="word">
            <li class="word">${data.stats[0].stat.name}</li>
            <li class="word">${data.stats[1].stat.name}</li>
            <li class="word">${data.stats[2].stat.name}</li>
            <li class="word">${data.stats[3].stat.name}</li>
            <li class="word">${data.stats[4].stat.name}</li>
            <li class="word">${data.stats[5].stat.name}</li>
        </ul>
        <ul class="word">
        <li class="word">${data.moves[0].move.name}</li>
        <li class="word">${data.moves[1].move.name}</li>
        <li class="word">${data.moves[2].move.name}</li>
        <li class="word">${data.moves[3].move.name}</li>

        </ul>
`;
    });
}
function searchPokemon() {
  const searchTerm = document.querySelector(".search").value;
  console.log(searchTerm);
  const url = "https://pokeapi.co/api/v2/pokemon/" + { searchTerm };
  getData(url);
}
