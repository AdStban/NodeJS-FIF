const redis = require('redis')
const client = require('./conectionDB');

const uploadData = (results) => {
    const result = results;
    for ( let index = 0 ; index<result.length;index++){
        let starshipName = result[index]['name'];
        const arrayData = JSON.stringify(result[index]);
        client.set(starshipName, arrayData ,redis.print);
    }    
};

module.exports = {uploadData};