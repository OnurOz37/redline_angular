/*
* D’abord, on importe les éléments dont on va avoir besoin dans notre fichier.
* A la ligne 1, on importe l’annotation Component depuis le cœur de Angular
* */
import { Component } from '@angular/core';

//Définition du composant
@Component({
  selector: 'app-root', //donner un nom a son composant
  templateUrl: './templates/app.component.html',
  styleUrls: ['./css/app.header.component.css', 'css/app.general.component.css', 'css/app.content.component.css']
})
export class AppComponent {
  name = 'Onur'
  title= "SIUU";
}