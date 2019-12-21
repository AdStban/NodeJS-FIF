/**
 * Index, donde tenemos los llamados a las demas funciones y objetos
 */
const express = require("express");
const bodyParser = require("body-parser");
const getStarships = require("./getStarships");
const insertData = require('./insertData');          
const getData = require('./getData');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/ruta-1",(req,res, next)=> {
    console.log(req.body);
    res.status(200);
    res.end;    
});

app.post("/ruta-2", async (req,res)=>{
    const result = await getStarships();
    await insertData.uploadData({result});
    
    res.json(result);
});

app.post("/ruta-3", async (req,res)=>{
    const { filter } = req.body;
    //Si no encuentra datos arroja el 404
    res.status(404);
   
    res.json(JSON.parse(await getData.getData(filter['value'])));
});

app.listen(PORT,()=>{
    console.log(`App started on port: ${ PORT }`);
});