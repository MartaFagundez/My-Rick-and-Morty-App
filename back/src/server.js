const http = require("http");
const fs = require("fs");
const data = require("./utils/data.js");


const host = "localhost";
const port = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url?.includes("rickandmorty/character")) {

        let id = Number(req.url.split("/")[3]);
        let character = data.characters.filter((char) => char.id === id);
        
        // Si se encuentra un personaje con el id
        if (character.length) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(character[0]));
        }
        // Si no encuentra un personaje con el id
        else {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("Character not found");
        }

    }
    
    
}).listen(port, host);