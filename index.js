import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());//=ช่วยให้เห็น body 
import { getConfigsTobit, getConfigsTobitpage, getlogstobit, getstatustobit, postlogstobit } from './pro_handdler.js';





const port = process.env.PORT_ENV || 8000;

app.listen(port,() =>{
    /* const apiURL = process.env.LINE_API_BASE_URL;
    console.log({apiURL}); */
    console.log('Server listening on port '+ port)
    console.log("Please go to http://127.0.0.1:" + port)
})

app.get('/',(req,res) =>{

res.send('Welcome to Project Webappication')
})



app.get('/configs', getConfigsTobit)


app.get('/configs/:yourDroneId', getConfigsTobitpage)


app.get('/status/:yourDroneId', getstatustobit)


app.get('/logs/:yourDroneId', getlogstobit)

app.post('/logs', postlogstobit)
