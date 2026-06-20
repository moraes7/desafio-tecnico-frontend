import { Injectable } from '@angular/core';
import { MOCK_CRIANCAS, MOCK_VACINAS, MOCK_REGISTROS } from '../data/carteira-vacinacao.mock';
import { CriancaEntity } from '../models/crianca.entity';
import { RegistroVacinaEntity } from '../models/registro-vacina.entity';

@Injectable({
  providedIn: 'root',
})
export class CarteiraVacinacaoService {
  constructor() {};

  getCriancas(): CriancaEntity[] {
    return MOCK_CRIANCAS;
  };

  getHistoricoVacinacaoPorCrianca(criancaID: string): RegistroVacinaEntity[] {
    return MOCK_REGISTROS.filter(registro => registro.criancaID === criancaID);
  };

  isCriancaVacinaAtrasada(registro: RegistroVacinaEntity): boolean {
    const vacinouHoje = new Date();

    return !registro.vacinaAplicada && registro.dataLimite < vacinouHoje;
  }
}
