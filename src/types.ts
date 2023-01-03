

export type docente = {
    id: number,
    nome: string,
    email: string,
    data_nasc: number,
    turma_id: number
};
export type turma = {
    id: number,
    nome: string,
    docentes: number,
    estudantes: string,
    modulo: number
}
