import axios from 'axios';
// -------------------------------------------
// https://pixabay.com/users/50311976/   ------   u_2ddhzk1lhb ---------
//  My API key: 50311976-cfb8a0f5325f69922ed901f36
const API_KEY = '50311976-cfb8a0f5325f69922ed901f36';

const BASE_URL = 'https://pixabay.com/api/';
export function fetchData(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      throw error;
    });
}
