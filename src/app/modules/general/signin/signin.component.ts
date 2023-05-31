import { Component } from '@angular/core';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    username: string;
    password: string;
    errorMessage: string;

    constructor(private signinService: SigninService, private router: Router) { }

    onSubmit() {
        this.errorMessage = ''; // Réinitialiser le message d'erreur

        this.signinService.login(this.username, this.password).subscribe(
            response => {
                // Gérer la réponse de l'API en cas de succès
                console.log('Login successful');
                this.router.navigateByUrl('/home');
            },
            error => {
                // Gérer l'erreur de l'API en cas d'échec
                console.error('Login failed');

                if (error.status === 403) {
                    this.errorMessage = "Mauvais login ou mot de passe.";
                } else {
                    this.errorMessage = "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
                }
            }
        );
    }
}
