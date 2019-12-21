/**
 * getStarships, capturamos las naves desde la api
 */
// const axios = require('axios');
// const getStarships = async()=>{
//     const response = await axios.get('https://swapi.co/api/starships/?page=1');
//     const { results } = response.data;
//     return results; 
// };
const axios = require('axios');


const getStarships = async () => {
  let result = []
  let starshipResult = ""
  for (let i = 1; starshipResult !== null; i++) {
    const { data } = await axios.get(`https://swapi.co/api/starships/?page=${i}`)

    const { next, results } = data
    
    starshipResult = next
    result.push(...results);
  }
  
  return result;
}

module.exports = getStarships;