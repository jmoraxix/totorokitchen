const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const hostname= '127.0.0.1';//localhost
const port = '3001';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());


app.listen(port, hostname,()=>{
    console.log(`Server runing at http://${hostname}:${port}/api`);
});

app.use('/',routes());