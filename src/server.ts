import fastify from 'fastify';
import { Interface } from 'readline';
import cors from "@fastify/cors"
const app = fastify({logger: true});

app.register(cors,{
    origin: "*",
})

const drivers = [
    {id:1, nome:"masr"},

]
const teams=[
    {id:1, nome:"ferari"},

]
app.get('/teams',async(req,res)=>{
    res.type('application/json').code(200);
    return (teams)
})

app.get('/drivers',async(req,res)=>{
    res.type('application/json').code(200);
    return (drivers)
})

interface DriveParams {
    id: string
}
app.get<{Params: DriveParams}>("/drivers/:id", async(req,res)=>{
    const id = parseInt(req.params.id)
    const driver = drivers.find(d => d.id === id);

    if(!driver){
    res.type('application/json').code(404);
    return {message: "not found driver"};
    }else{
    res.type('application/json').code(200);
    return(driver)
    }
})

app.listen({port: 3333}, ()=>{
    console.log("Servidor ligado...")
})