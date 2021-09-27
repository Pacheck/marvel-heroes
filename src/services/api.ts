import axios from 'axios';

const apiKey = '19c20d40869ff15779b14dcbc52d2895';
// 'https://gateway.marvel.com:443/v1/public/characters?apikey=19c20d40869ff15779b14dcbc52d2895'
export default axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
  params: {
    limit: 100,
    apikey: apiKey,
  },
});
