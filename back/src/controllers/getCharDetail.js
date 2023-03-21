const axios = require("axios");

require ("dotenv").config();
const urlBase = process.env.API_URL;
const apiKey = process.env.API_KEY;

const getCharDetail = (req, res) => {
    const {id} = req.params;

    axios.get(`${urlBase}/character/${id}?key=${apiKey}`)
        .then(response => response.data)
        .then(data => {
           const character = {
            name: data.name,
            gender: data.gender,
            status: data.status,
            image: data.image,
            species: data.species,
            origin: data.origin,
            location: data.location
           }
           res.status(200).json(character); 
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
};

module.exports = {
    getCharDetail
}