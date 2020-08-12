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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return  {
    add: add,
    getAll: getAll
  }
})();

//loop through pokemonlist to display pokemon
pokemonRepository.getAll().forEach(pokemon => {
  //declare result to hold pokemon value
  let result = `${pokemon.name} (${pokemon.height})`;
  //check if height is greater than 7;
  if (pokemon.height >= 7) {
    result = `<div>${result} - Wow, that's big!</div>`
  } else {
    result = `<div>${result}</div>`
  }
  //display the result
  document.write(result)
}) 
