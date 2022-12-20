import { Request, Response } from "express"
import connection from "../connection"
import { docente } from "../types"


export default async function getAllDocentes(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const docentes: docente[] = await connection("docente")

        res.send(docentes)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}