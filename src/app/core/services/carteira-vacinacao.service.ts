import { Injectable, inject } from '@angular/core';
import { Firestore, Timestamp, collection, collectionData, doc, docData, query, where } from '@angular/fire/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CriancaEntity } from '../models/crianca.entity';
import { RegistroVacinaEntity } from '../models/registro-vacina.entity';
import { VacinaEntity } from '../models/vacina.entity';

@Injectable({
  providedIn: 'root',
})
export class CarteiraVacinacaoService {
  private firestore = inject(Firestore)

  constructor() {};

  getCriancas(): Observable<CriancaEntity[]> {
    const criancasCollection = collection(this.firestore, 'criancas');

    return collectionData(criancasCollection, {idField: 'id'}) as Observable<CriancaEntity[]>;
  };

  getCriancaPorId(id: string): Observable<CriancaEntity> {
    const criancaDocRef = doc(this.firestore, `criancas/${id}`);
    return docData(criancaDocRef, { idField: 'id' }) as Observable<CriancaEntity>;
  }

  getVacinas(): Observable<VacinaEntity[]> {
    const vacinasCollection = collection(this.firestore, 'vacinas');

    return collectionData(vacinasCollection, {idField: 'id'}) as Observable<VacinaEntity[]>
  };

  getHistoricoVacinacaoPorCrianca(criancaID: string): Observable<any[]> {
    const registrosCollection = collection(this.firestore, 'registro-vacina');
    const consulta = query(registrosCollection, where('criancaID', '==', criancaID));

    return collectionData(consulta, { idField: 'id' }).pipe(
      switchMap((registros: any[]) => {
        if (registros.length === 0) return of([]);

        const buscasVacinas$ = registros.map(registro => {
          const vacinaDocRef = doc(this.firestore, `vacinas/${registro.vacinaID}`);
          
          return docData(vacinaDocRef, { idField: 'id' }).pipe(
            map((vacina: any) => {
              return {
                ...registro,
                dadosVacina: vacina
              };
            })
          );
        });

        return combineLatest(buscasVacinas$);
      })
    );
  }

  isCriancaVacinaAtrasada(registro: any): boolean {
    if (!registro || registro.vacinaAplicada) {
      return false;
    }

    const hoje = new Date();
    let dataLimite: Date;

    if (registro.dataLimite && typeof registro.dataLimite.toDate === 'function') {
      dataLimite = registro.dataLimite.toDate();
    } else {
      dataLimite = new Date(registro.dataLimite);
    }

    return dataLimite < hoje;
  }
}
