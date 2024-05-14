const app = require("./server/express");
const database = require('./database/database');
const fetch = require('node-fetch');
const fs = require('node:fs')



app.listen(app.get("port"), () => console.log("Pagina prendido"));