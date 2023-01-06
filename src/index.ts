import app from "./app"
import createDocente from "./endpoints/createDocente"
import getAllDocentes from "./endpoints/getAllDocentes"



app.get("/docente", getAllDocentes)
app.post("/docente", createDocente)