import {Component} from '@angular/core';
import {SallesService} from '../salles/salles.service';
import {SitesService} from './sites.service';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-sites',
    templateUrl: 'app.sites.component.html',
    styleUrls: ['sites.component.css']
})
export class SitesComponent {
    sites: any[];
    salles: any[];
    selectedSite: any;
    selectedSalle: any;
    afficherAjout: boolean;
    afficherAjoutSalle: boolean;
    ajoutForm = this.formBuilder.group({
        libelle: ['', [Validators.required, Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.maxLength(255)]],
        adresse: ['', [Validators.required, Validators.maxLength(150)]]
    })
    ajoutFormMessage: string | null;

    constructor(private sitesService: SitesService, private sallesService: SallesService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.getSites();
    }

    getSites(): void {
        this.sitesService.getSites().pipe().subscribe(data => {
            this.sites = data as any[];
        })
    }

    getSalles(site: any): void {
        if (site && site.salles) {
            this.salles = site.salles;
        } else {
            this.salles = [];
        }
    }

    toggleAfficherAjout(): void {
        this.afficherAjout = !this.afficherAjout;
    }

    toggleAfficherAjoutSalle(): void {
        this.afficherAjoutSalle = !this.afficherAjoutSalle;
    }

    onAjoutFormSubmit() {
        if (this.ajoutForm.valid) {
            this.sitesService.addSite(this.ajoutForm.value)
                .subscribe(response => {
                        this.sites.push(response);
                        this.ajoutForm.reset();
                        this.ajoutFormMessage = "Succès.";
                    },
                    error => {
                        this.ajoutFormMessage = "Une erreur s'est produite : les données n'ont pas été enregistrées.";
                    }
                );
        } else {
            this.ajoutFormMessage = "Enregistrement impossible : formulaire erroné.";
        }
    }
}
