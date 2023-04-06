const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu/';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Actualiza la imagen del Pokemon
    document.getElementById('pokemon-image').src = data.sprites.front_default;
    // Actualiza el nombre del Pokemon
    document.getElementById('pokemon-name').textContent = data.name;
    // Actualiza la altura del Pokemon
    document.getElementById('pokemon-height').textContent = 'Altura: ' + data.height + ' cm';
    // Actualiza el peso del Pokemon
    document.getElementById('pokemon-weight').textContent = 'Peso: ' + data.weight + ' kg';
    // Actualiza los tipos del Pokemon
    const types = data.types.map(type => type.type.name).join(', ');
    document.getElementById('pokemon-types').textContent = 'Tipos: ' + types;
  })
  .catch(error => console.error(error));
