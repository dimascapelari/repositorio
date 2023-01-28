const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`

    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
        })
}

fetchPokemon()

------------------------------------

const listaProdutos = () => {
  const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC`;

  fetch(url)
    .then((response) => response.json())
    .then((lista) => {
      console.log(lista);
      //console.log(lista.products);
      console.log("name: ", lista.products[0].name);
      console.log("brand: ", lista.products[0].brand);
      console.log("description: ", lista.products[0].description);
      console.log("photo: ", lista.products[0].photo);
    });
};

listaProdutos();

