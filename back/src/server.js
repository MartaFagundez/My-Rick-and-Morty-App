const http = require("http");
const {getCharById} = require("./controllers/getCharById.js");
const {getCharDetail} = require("./controllers/getCharDetail.js");

const host = "localhost";
const port = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url);
    if (req.url?.includes("onsearch")) {
        let id = Number(req.url.split("/").pop());
        getCharById(res, id);
    }
    if (req.url?.includes("detail")) {
        let id = Number(req.url.split("/").pop());
        getCharDetail(res, id);
    }
    
}).listen(port, host);