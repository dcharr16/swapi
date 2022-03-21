const baseUrl = 'https://swapi.dev/api/'

function getAllStarships() {
  return fetch(`${baseUrl}starships/`)
  .then(res => res.json())
}

function getStarshipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}

export {
  getAllStarships,
  getStarshipDetails,
}