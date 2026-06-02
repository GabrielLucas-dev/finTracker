import express from "express";
import cors from "cors";
import userRoutes from "./modules/users/routes/UserRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

const PORT: number = 3033;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
