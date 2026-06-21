import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-campanha-vacinacao',
  templateUrl: './campanha-vacinacao.page.html',
  styleUrls: ['./campanha-vacinacao.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CampanhaVacinacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
