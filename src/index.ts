import app from "./app"
import getAllDocentes from "./endpoints/getAllDocentes";
import getAllTurma from "./endpoints/getAllTurma"
import getAllEstudantes from "./endpoints/getAllEstudantes";
// endpoint

app.get("/turma", getAllTurma);

app.get("/docente", getAllDocentes)

app.get("/estudantes", getAllEstudantes)
