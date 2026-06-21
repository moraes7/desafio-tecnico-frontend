import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'criancas',
    pathMatch: 'full'
  },
  {
    path: 'criancas',
    loadComponent: () => import('./pages/criancas/criancas.page').then( m => m.CriancasPage)
  },
  {
    path: 'carteira-vacinacao/:id',
    loadComponent: () => import('./pages/carteira-vacinacao/carteira-vacinacao.page').then( m => m.CarteiraVacinacaoPage)
  },
];
