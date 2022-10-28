const express =  require('express');
const  router = require('./src/route/api')
const app =new express();


app.use("/api/v1",router);

module.exports =app;