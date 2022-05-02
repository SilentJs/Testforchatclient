const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
require('dotenv').config()

const staticPath=path.join(__dirname,'../public');

app.use(express.static(staticPath))

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/', router);
app.listen(process.env.PORT);
console.log(`running at port ${process.env.PORT}`)


