import fastify from 'fastify';
import { Interface } from 'readline';
import cors from "@fastify/cors"
const app = fastify({logger: true});

app.register(cors,{
    origin: "*",
})

const drivers = [
    { id: 1, nome: "Max Verstappen", teamId: 1 },
    { id: 2, nome: "Sergio Pérez", teamId: 1 },
    { id: 3, nome: "Charles Leclerc", teamId: 2 },
    { id: 4, nome: "Carlos Sainz", teamId: 2 },
    { id: 5, nome: "Lewis Hamilton", teamId: 3 },
    { id: 6, nome: "George Russell", teamId: 3 },
    { id: 7, nome: "Lando Norris", teamId: 4 },
    { id: 8, nome: "Oscar Piastri", teamId: 4 },
    { id: 9, nome: "Fernando Alonso", teamId: 5 },
    { id: 10, nome: "Lance Stroll", teamId: 5 },
    { id: 11, nome: "Esteban Ocon", teamId: 6 },
    { id: 12, nome: "Pierre Gasly", teamId: 6 },
    { id: 13, nome: "Alexander Albon", teamId: 7 },
    { id: 14, nome: "Logan Sargeant", teamId: 7 },
    { id: 15, nome: "Valtteri Bottas", teamId: 8 },
    { id: 16, nome: "Zhou Guanyu", teamId: 8 },
    { id: 17, nome: "Yuki Tsunoda", teamId: 9 },
    { id: 18, nome: "Daniel Ricciardo", teamId: 9 },
    { id: 19, nome: "Kevin Magnussen", teamId: 10 },
    { id: 20, nome: "Nico Hülkenberg", teamId: 10 }
];

const teams = [
    { id: 1, nome: "Red Bull Racing" },
    { id: 2, nome: "Ferrari" },
    { id: 3, nome: "Mercedes" },
    { id: 4, nome: "McLaren" },
    { id: 5, nome: "Aston Martin" },
    { id: 6, nome: "Alpine" },
    { id: 7, nome: "Williams" },
    { id: 8, nome: "Sauber (Stake)" },
    { id: 9, nome: "RB (Visa Cash App)" },
    { id: 10, nome: "Haas" }
];


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