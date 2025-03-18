import express from 'express';
import dotenv from 'dotenv';
import {getConfigsTobit,getConfigsTobitpage,getstatustobit,getlogstobit,postlogstobit,getlogspage} from './pro_handdler.js';
dotenv.config();
const app = express();
app.use(express.json());




const port = process.env.PORT_ENV || 8000;

app.listen(port,() =>{
    console.log('Server listening on port '+ port)
    console.log("Please go to http://127.0.0.1:" + port)
})

app.get('/',(req,res) =>{

res.send('Welcome to Project Webappication')
})



app.get('/configs', getConfigsTobit)


app.get('/configs/:yourDroneId', getConfigsTobitpage)


app.get('/status/:yourDroneId', getstatustobit)

app.get('/logs', getlogspage)


app.get('/logs/:yourDroneId', getlogstobit)


app.post('/logs', postlogstobit)


