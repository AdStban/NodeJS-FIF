/**
 * 
 * @param {*} filter sirve para obtener la data, según el nombre de la nave.
 */
const client = require('./conectionDB');
const util = require('util');
const getAsync = util.promisify(client.get).bind(client);

const getData = async (filter) => founds = await getAsync(filter);

module.exports = {getData};