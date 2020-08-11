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
  }
];

//loop through pokemonlist to display pokemon
for(let i = 0; i < pokemonList.length; i++) {
  //declare result to hold pokemon value
  let result = `${ pokemonList[i].name } (${ pokemonList[i].height })`;
  //check if height is greater than 7;
  if(pokemonList[i].height >= 7) {
    result = `<div>${result} - Wow, that's big!</div>`
  } else {
    result = `<div>${result}</div>`
  }
  //display the result
  document.write(result)
}
