import app from "./app"
import getAllDocentes from "./endpoints/getAllDocentes"



app.get("/docente", getAllDocentes)