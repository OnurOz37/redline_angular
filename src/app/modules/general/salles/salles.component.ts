import { Component } from '@angular/core';
import {SallesService} from "./salles.service";
import {SitesService} from "../sites/sites.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-salles',
  templateUrl: 'salles.component.html',
  styleUrls: [ 'salles.component.css'
  ]
})
export class SallesComponent {
  salles: any[];
  sites: any[];
  newSalleForm: FormGroup;


  constructor(private sallesService:SallesService, private sitesService: SitesService, private formBuilder: FormBuilder){
    this.newSalleForm = this.formBuilder.group({
      libelle: ['',Validators.required],
      nbPlaces: ['',Validators.required],
      description: ['',Validators.required],
      actif: false,
      siteId: ''
    })
  }
  ngOnInit(){
        this.getSalles()
  }

  getSalles(): void {
    this.sallesService.getSalles().pipe().subscribe(data => {
      this.salles = data as any[];
    });

    this.sitesService.getSites().pipe().subscribe(data => {
      this.sites = data as any[];
    });
  }

    addSalle(): void {
    const salle = {
      libelle: this.newSalleForm.value.libelle,
        nbPlaces: this.newSalleForm.value.nbPlaces,
        description: this.newSalleForm.value.description,
        siteId: this.newSalleForm.value.siteId
    }
      this.sallesService.addSalle(salle).pipe().subscribe(data => {
        this.salles = data as any[];
      })
    }
}
