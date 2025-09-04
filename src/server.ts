import fastify from 'fastify';
import { Interface } from 'readline';

const app = fastify({logger: true});
const drivers = [
    {id:1, nome:"masr"},
    {id:2, nome:"masr"},
    {id:3, nome:"masr"},
    {id:4, nome:"masr"},
]
const teams=[
    {id:1, nome:"ferari"},
    {id:2, nome:"mercedes"},
    {id:3, nome:"redull"},
    {id:4, nome:"outra"},
]
app.get('/teams',async(req,res)=>{
    res.type('application/json').code(200);
    return (teams)
})

app.get('/drivers',async(req,res)=>{
    res.type('application/json').code(200);
    return (drivers)
})



app.listen({port: 3333}, ()=>{
    console.log("Servidor ligado...")
})