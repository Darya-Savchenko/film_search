const axios = require('axios');
const { Movies } = require('../entities/Movies');

const {API_KEY} = require('../../config');
const {API_BASE_URL} = require('../../config');

const getPopular = async (page, language) => {
    const result = await axios.get(`${API_BASE_URL}3/movie/popular?language=${language}&page=${page}&api_key=${API_KEY}`)

    return new Movies(result.data);
}

const getDetails = (id, language) => {
    return axios.get(`${API_BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=${language}`);
}

module.exports = {
    getPopular,
    getDetails
}