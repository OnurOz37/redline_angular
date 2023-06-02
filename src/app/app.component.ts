/*
* D’abord, on importe les éléments dont on va avoir besoin dans notre fichier.
* A la ligne 1, on importe l’annotation Component depuis le cœur de Angular
* */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";

//Définition du composant
@Component({
  selector: 'app-root', //donner un nom a son composant
  templateUrl: './templates/app.component.html',
  styleUrls: ['./css/app.header.component.css', 'css/app.general.component.css', 'css/app.content.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

}