const axios = require("axios");

require ("dotenv").config();
const urlBase = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getCharById = (req, res) => {
    const {id} = req.params;

    axios.get(`${urlBase}/character/${id}?key=${apiKey}`)
        .then(response => response.data)
        .then(data => {
           const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            image: data.image,
            species: data.species
           }
           res.status(200).json(character); 
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
}

module.exports = {
    getCharById
}