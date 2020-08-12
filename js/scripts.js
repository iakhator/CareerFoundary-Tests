let pokemonRepository = (function () {
  let pokemonList = [
  {
  name: "Pikachu",
  height: 5,
  type: ['lime', 'lemon']
  },
  {
    name: "Bulbasaur",
    height: 7,
    type: ['grass', 'poison']
  },
  {
  name: "Blastoise",
  height: 1.6,
  type: ['water']
  },
  {
    name: "Beedrill",
    height: 1,
    type: ['bug', 'posion']
  },
  {
    name: "Warturtle",
    height: 1,
    type: ['water']
  }]

  function hasProperties(pokemon) {
    return pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('height') && pokemon.hasOwnProperty('type');
  }

  function add(pokemon) {
    
    if(typeof pokemon == 'object' && hasProperties(pokemon)) {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function getPokemon(name) {
    return pokemonList.filter((pokemon) => pokemon.name == name)
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-btn');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  return  {
    add: add,
    getAll: getAll,
    getPokemon: getPokemon,
    addListItem: addListItem,
  }
})();

//loop through pokemonlist to display pokemon
pokemonRepository.getAll().forEach(pokemon => {
  
  pokemonRepository.addListItem(pokemon)
  //declare result to hold pokemon value
  // let result = `${pokemon.name} (${pokemon.height})`;
  // //check if height is greater than 7;
  // if (pokemon.height >= 7) {
  //   result = `<div>${result} - Wow, that's big!</div>`
  // } else {
  //   result = `<div>${result}</div>`
  // }
  // //display the result
  // document.write(result)
}) 

window.repo = pokemonRepository;
