import { Component } from '@angular/core';
import { SigninService } from './signin.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    username: string;
    password: string;

    constructor(private signinService: SigninService) { }

    onSubmit() {
        this.signinService.login(this.username, this.password).subscribe(
            response => {
                // Gérer la réponse de l'API en cas de succès
                console.log('Login successful');
            },
            error => {
                // Gérer l'erreur de l'API en cas d'échec
                console.error('Login failed');
            }
        );
    }
}
