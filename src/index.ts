import app from "./app"
import createDocente from "./endpoints/createDocente"
import createEstudante from "./endpoints/createEstudante"
import getAllDocentes from "./endpoints/getAllDocentes"
import getAllEstudantes from "./endpoints/getAllEstudantes"
import getAllTurma from "./endpoints/getAllTurma"



app.get("/docente", getAllDocentes)
app.put("/docente", createDocente)

app.get("/turma", getAllTurma)

app.get("/estudante", getAllEstudantes)

app.put("/estudante", createEstudante)