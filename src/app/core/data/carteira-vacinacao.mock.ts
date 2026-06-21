import { CriancaEntity } from "../models/crianca.entity";
import { VacinaEntity } from "../models/vacina.entity";
import { RegistroVacinaEntity } from "../models/registro-vacina.entity";

export const MOCK_CRIANCAS: CriancaEntity[] = [
    { id: 'c1', nome: 'Pedro', dataNascimento: new Date(2025, 5, 10) },
    { id: 'c2', nome: 'Mariana', dataNascimento: new Date(2026, 1, 15) }
];

export const MOCK_VACINAS: VacinaEntity[] = [
    { id: 'v1', nome: 'BCG', descricao: 'Previne formas graves de tuberculose', mesesRecomendado: 0, doseVacina: 'Dose única.' },
    { id: 'v2', nome: 'Hepatite B', descricao: 'Previne a hepatite B', mesesRecomendado: 0, doseVacina: '1ª Dose.' },
    { id: 'v3', nome: 'Tríplice Viral', descricao: 'Previne Sarampo, Caxumba e Rubéola', mesesRecomendado: 12, doseVacina: '1ª Dose.' }
];

export const MOCK_REGISTROS: RegistroVacinaEntity[] = [
    { id: 'r1', criancaID: 'c1', vacinaID: 'v1', vacinaAplicada: true, dataAplicacao: new Date(2025, 5, 11), dataLimite: new Date(2025, 6, 10) },
    { id: 'r2', criancaID: 'c1', vacinaID: 'v3', vacinaAplicada: false, dataLimite: new Date(2026, 5, 10) }
];