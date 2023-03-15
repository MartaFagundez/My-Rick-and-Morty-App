const axios = require("axios");

const urlBase = "https://be-a-rym.up.railway.app/api";
const apiKey = "f1eb8e685b6b.6e353b80c36825beb221";

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