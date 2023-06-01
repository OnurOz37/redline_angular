import { Component } from '@angular/core';
import {SallesService} from "./salles.service";

@Component({
  selector: 'app-salles',
  templateUrl: 'salles.component.html',
  styles: [
  ]
})
export class SallesComponent {
  salles: any[];

  constructor(private sallesService:SallesService) {
  }
  ngOnInit(){
        this.getSalles()
  }

  getSalles(): void {
    this.sallesService.getSalles().pipe().subscribe(data => {
      this.salles = data as any[];
    })
  }
}
