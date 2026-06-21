import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampanhaVacinacaoPage } from './campanha-vacinacao.page';

describe('CampanhaVacinacaoPage', () => {
  let component: CampanhaVacinacaoPage;
  let fixture: ComponentFixture<CampanhaVacinacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaVacinacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
