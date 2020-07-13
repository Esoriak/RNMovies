
const API_token = "d7f491de332f9a1ab1b52529bc88c9c2";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + API_token + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}