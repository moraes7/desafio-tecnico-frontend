import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonAvatar, 
  IonButtons, 
  IonMenuButton 
} from '@ionic/angular/standalone';
import { CarteiraVacinacaoService } from '../../core/services/carteira-vacinacao.service';
import { CriancaEntity } from '../../core/models/crianca.entity';

@Component({
  selector: 'app-criancas',
  templateUrl: './criancas.page.html',
  styleUrls: ['./criancas.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonAvatar, 
    IonButtons, 
    IonMenuButton
  ]
})

export class CriancasPage implements OnInit {
  listaCriancas: CriancaEntity[] = [];

  constructor(private carteiraVacinacaoService: CarteiraVacinacaoService) {};

  ngOnInit() {
    this.listaCriancas = this.carteiraVacinacaoService.getCriancas();
  }
};