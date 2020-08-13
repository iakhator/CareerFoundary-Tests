let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function hasProperties(pokemon) {
    return pokemon.hasOwnProperty('name') && pokemon.hasOwnProperty('height') && pokemon.hasOwnProperty('type');
  }

  function add(pokemon) {
    // if(typeof pokemon == 'object' && hasProperties(pokemon)) {
      pokemonList.push(pokemon);
    // }
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

    callHandler(button, pokemon)
  }
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function callHandler(element, pokemon) {
    element.addEventListener('click', showDetails.bind(this, pokemon))
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
      hideLoadingMessage()
    }).catch(function (e) {
      console.error(e);
      hideLoadingMessage()
    })
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      hideLoadingMessage()
    }).catch(function (e) {
      console.error(e);
      hideLoadingMessage()
    });
  }
  
  function showLoadingMessage() {
    showHideLoadingMessage('block');
  }

  function hideLoadingMessage() {
    showHideLoadingMessage('none');
  }

  function showHideLoadingMessage(param) {
    let para = document.querySelector('.loading');
    para.style.display = param;
  }

  return  {
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
  }
})();

//loop through pokemonlist to display pokemon
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

window.repo = pokemonRepository;
