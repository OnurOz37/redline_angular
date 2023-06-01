import { Component } from '@angular/core';
import { UserService } from './signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [UserService] // Ajoutez le service comme fournisseur
})
export class SignupComponent {
    username: string;
    password: string;
    nom: string;
    mail: string;
    motDePasse: string;
    idRole: any;

    constructor(private userService: UserService) {}

    createUser() {
        if (!this.nom || !this.mail || !this.motDePasse || !this.idRole) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const userData = {
            nom: this.nom,
            mail: this.mail,
            motDePasse: this.motDePasse,
            idRole: this.idRole
        };

        this.userService.createUser(userData).subscribe(
            response => {
                alert('Utilisateur créé avec succès.');
                this.nom = '';
                this.mail = '';
                this.motDePasse = '';
                this.idRole = null;
            },
            error => {
                console.error("Erreur lors de la création de l'utilisateur:", error);
                alert("Une erreur s'est produite lors de la création de l'utilisateur. Veuillez réessayer.");
            }
        );
    }
}
