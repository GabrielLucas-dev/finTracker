import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/routes/userRoutes.js";
import transacoesRoutes from './modules/transactions/routes/TransacoesRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/transacoes", transacoesRoutes)

const PORT: number = 3033;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
