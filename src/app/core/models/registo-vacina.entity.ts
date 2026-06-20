export interface RegistroVacinaEntity {
    id: string;
    criancaID: string;
    vacinaID: string;
    vacinaAplicada: boolean;
    dataAplicacao?: Date;
    dataLimite: Date;
}