import express from "express";
import cors from "cors";
import { createUser, getUserById, getUsers } from "./repositories/userRepository.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const users = await getUsers() 
    return res.status(200).json(users)
})

// app.get('/id', async (req, res) => {
//     const user = await getUserById(3)
//     return res.status(200).json(user)
// })

app.post('/', (req, res) => {
    const newUser = createUser({
        nome: "Fulano Silva",
        email: "Fulano@gmail.com",
        senha: "654321"
    }) 
    return res.status(201).json(newUser);
})

const PORT: number = 3033;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
