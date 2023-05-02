const express = require('express');

const chef = require('./data/chefData.json')
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

app.use(cors())

app.get('/',(req, res)=>{
res.send('chef is running')
});

app.get('/chef',(req, res)=>{
    res.send(chef)
})

app.listen(port,()=>{
    console.log(`Chef is running API port: ${port}`)
})