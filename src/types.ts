export enum TYPE_CLASS{
    INTEGRAL = "integral",
    NOTURNA = "noturna"
}

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
    estudantes: number,
    modulo: number
};
export type estudante = {
    id: number,
    nome: string,
    email: string,
    data_nasc: number,
    turma_id:number

};

//id, nome, email, data de nascimento e os principais hobbies dele. estudandtes

//id, nome, email, data de nascimento e todas as especialidades dele.