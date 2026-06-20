import { TestBed } from '@angular/core/testing';

import { CarteiraVacinacao } from './carteira-vacinacao.service';

describe('CarteiraVacinacao', () => {
  let service: CarteiraVacinacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteiraVacinacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
