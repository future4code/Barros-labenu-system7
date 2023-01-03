import app from "./app"
import getAllDocentes from "./endpoints/getAllDocentes";
import getAllTurma from "./endpoints/getAllTurma"
// endpoint

app.get("/turma", getAllTurma);

app.get("/docente", getAllDocentes)
