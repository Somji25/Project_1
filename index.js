import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
app.use(express.json());//=ช่วยให้เห็น body 




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



app.get('/configs', async (req,res) =>{

const url = process.env.URL_ENV
try{
    const response = await axios.get(url)
    const data = response.data.data
    res.send(data)
}catch(eror){
    console.log(eror)
    res.send(eror)
}
})


app.get('/configs/:yourDroneId', async (req,res) =>{
    const droneId = req.params.yourDroneId
    try{
        const url = process.env.URL_ENV
        const response = await axios.get(url)
        const data = response.data.data
        const selectitem = data.map(data => {return {drone_id: data.drone_id, drone_name: data.drone_name, light: data.light, country: data.country ,weigh: data.weight}})
        const finditem = selectitem.find(selectitem => selectitem.drone_id === Number(droneId))
        res.send(finditem)

    }catch(eror){
        console.log(eror)
    }
})


app.get('/status/:yourDroneId', async (req,res) =>{
    const droneId = req.params.yourDroneId
    try{
        const url = process.env.URL_ENV
        const response = await axios.get(url)
        const data = response.data.data
        //const selectitem = data.map(data => {return {condition: data.condition}}) */
        const finditem = data.find(data => data.drone_id === Number(droneId))
        res.send({condition : finditem.condition})

    }catch(eror){
        console.log(eror)
    }
})


app.get('/logs/:yourDroneId', async (req,res) =>{
    const droneId = req.params.yourDroneId
    try{
        const url = process.env.URL_ENV_2
        const response = await axios.get(url)
        const data = response.data.items
        //const selectitem = data.map(data => {return {condition: data.condition}}) */
        const selectitem = data.map(data => {return {drone_id: data.drone_id, drone_name: data.drone_name, created: data.created, country: data.country ,celsius: data.celsius}})
        const finditem = selectitem.find(selectitem => selectitem.drone_id === Number(droneId))
        res.send(finditem)

    }catch(eror){
        console.log(eror)
    }
})
app.post('/logs', async(req,res) =>{
    const url = process.env.URL_LOG
    const data = req.body
    const options = {
        method: 'POST',
        url: url,
        headers: {
            authorization: 'Bearer 20250301efx', 
            'content-type': 'application/json'
        },
        data: data
    };
      
      try {
        const { data } = await axios.request(options);
        res.send(data)
      } catch (error) {
        res.send(error)
      }

    
})
