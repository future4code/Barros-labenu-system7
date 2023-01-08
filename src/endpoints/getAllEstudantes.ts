import { Request,Response } from "express";
import connection from "../connection";
import { estudantes } from "../types";

export default async function getAllEstudantes(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const name = req.query

        const estudante : estudantes[] = await connection("Estudantes")

        res.send(estudante)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}