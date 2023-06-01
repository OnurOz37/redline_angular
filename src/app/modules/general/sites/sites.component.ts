import { Component } from '@angular/core';
import { SallesService } from '../salles/salles.service';
import { SitesService } from './sites.service';

@Component({
  selector: 'app-sites',
  templateUrl:'app.sites.component.html',
  styleUrls: ['sites.component.css']
})
export class SitesComponent {
  sites : any[];
  salles : any[];
  selectedSite : any;
  selectedSalle : any;

  constructor(private sitesService: SitesService, private sallesService: SallesService) {
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
    if(site && site.salles) {
      this.salles = site.salles;
    } else {
      this.salles = [];
    }
  }

}
