import { Component } from '@angular/core';
import { UserService } from './signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [UserService] // Ajoutez le service comme fournisseur
})
export class SignupComponent {
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
            () => {
                alert('Utilisateur créé avec succès.');
                this.nom = '';
                this.mail = '';
                this.motDePasse = '';
                this.idRole = null;
            },
            error => {
                console.error("Erreur lors de la création de l'utilisateur:", error);
                if (error.status === 409) {
                    alert("Oops ! Une erreur est survenue lors de la création de votre compte." +
                        "L'adresse e-mail que vous avez fournie est déjà associée à un autre compte utilisateur.");
                } else {
                    alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
                }
            }
        );
    }
}
