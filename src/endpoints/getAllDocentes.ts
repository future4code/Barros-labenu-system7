import { Request, Response } from "express"
import connection from "../connection"
import { docente } from "../types"


export default async function getAllDocentes(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const name = req.query

        const docentes: docente[] = await connection("DOCENTE")

        res.send(docentes)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}