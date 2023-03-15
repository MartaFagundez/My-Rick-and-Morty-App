const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const server = express();
const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);



server.listen(PORT, () => {
    console.log(`Server raised in port http://localhost:${PORT}`)
});