const axios = require("axios");

const urlBase = "https://be-a-rym.up.railway.app/api";
const apiKey = "f1eb8e685b6b.6e353b80c36825beb221";

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