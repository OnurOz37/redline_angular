import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private loginService: LoginService) { }

    onSubmit() {
        this.loginService.login(this.username, this.password).subscribe(
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
