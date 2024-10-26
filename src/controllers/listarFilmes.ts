import { Request, Response } from "express";
import pool from "../conexaoDB";

const listarFilmes = async (req: Request, res: Response) => {

    try {
        async function listarFilme() {
            const { rows } = await pool.query("SELECT * FROM listar")
            return rows
        }

        const listou = await listarFilme()

        res.status(200).json(listou)

    } catch (error) {
        const erro = error as Error
        res.status(500).json({
            mensagem: erro.message
        })
    }
}

export default listarFilmes