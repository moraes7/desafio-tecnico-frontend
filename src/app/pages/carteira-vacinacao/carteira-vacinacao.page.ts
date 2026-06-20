import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
import { RegistroVacinaEntity } from '../../core/models/registro-vacina.entity';
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
  crianca: CriancaEntity | undefined;
  historicoVacinacao: RegistroVacinaEntity[] = [];

  constructor(private route: ActivatedRoute, public vacinacaoService: CarteiraVacinacaoService) {};

  ngOnInit() {
    const criancaID = this.route.snapshot.paramMap.get('id');

    if(criancaID) {
      this.crianca = this.vacinacaoService.getCriancas().find(c => c.id === criancaID);

      this.historicoVacinacao = this.vacinacaoService.getHistoricoVacinacaoPorCrianca(criancaID);
    }
  }
};