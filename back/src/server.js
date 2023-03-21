const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const server = express();

require ("dotenv").config();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);



server.listen(port, () => {
    console.log(`Server raised in port http://localhost:${port}`)
});