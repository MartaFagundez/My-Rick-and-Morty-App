const axios = require("axios");

const urlBase = "https://be-a-rym.up.railway.app/api";
const apiKey = "f1eb8e685b6b.6e353b80c36825beb221";

const getCharDetail = (res, id) => {
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
           res.writeHead(200, {"Content-Type": "application/json"});
           res.end(JSON.stringify(character)); 
        })
        .catch(error => {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end(error.message);
        });
};

module.exports = {
    getCharDetail
}