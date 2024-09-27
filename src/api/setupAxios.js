import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 3000,
    headers: {'Content-Type': ''}
  });

  export default instance