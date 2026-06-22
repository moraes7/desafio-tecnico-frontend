import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonBadge, 
  IonItem, 
  IonLabel, 
  IonList 
} from '@ionic/angular/standalone';
import { CarteiraVacinacaoService } from '../../core/services/carteira-vacinacao.service';
import { CriancaEntity } from '../../core/models/crianca.entity';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira-vacinacao.page.html',
  styleUrls: ['./carteira-vacinacao.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonBadge, 
    IonItem, 
    IonLabel, 
    IonList
  ]
})
export class CarteiraVacinacaoPage implements OnInit {
  @Input() id!: string;

  public vacinacaoService = inject(CarteiraVacinacaoService);

  crianca$!: Observable<CriancaEntity>;
  
  historicoVacinacao$!: Observable<any[]>;

  constructor() {}

  ngOnInit() {
    if (this.id) {
      this.crianca$ = this.vacinacaoService.getCriancaPorId(this.id);

      this.historicoVacinacao$ = this.vacinacaoService.getHistoricoVacinacaoPorCrianca(this.id);
    }
  }
}