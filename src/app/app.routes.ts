import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'criancas',
    loadComponent: () => import('./pages/criancas/criancas.page').then( m => m.CriancasPage)
  },
  {
    path: 'carteira-vacinacao',
    loadComponent: () => import('./pages/carteira-vacinacao/carteira-vacinacao.page').then( m => m.CarteiraVacinacaoPage)
  },
];
