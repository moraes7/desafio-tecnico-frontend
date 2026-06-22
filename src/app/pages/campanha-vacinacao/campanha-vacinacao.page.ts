import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { CarteiraVacinacaoService } from '../../core/services/carteira-vacinacao.service';
import { VacinaEntity } from '../../core/models/vacina.entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campanha-vacinacao',
  templateUrl: './campanha-vacinacao.page.html',
  styleUrls: ['./campanha-vacinacao.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonItem,
    IonLabel,
  ]
})

export class CampanhaVacinacaoPage implements OnInit {
  listaVacinas$!: Observable<VacinaEntity[]>;

  constructor(private carteiraVacinacaoService: CarteiraVacinacaoService) {
    addIcons({informationCircleOutline, shieldCheckmarkOutline});
  };

  ngOnInit() {
    this.listaVacinas$ = this.carteiraVacinacaoService.getVacinas();
  };
};