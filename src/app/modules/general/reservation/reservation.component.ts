import {Component} from '@angular/core';
import {ReservationService} from "./reservation.service";

@Component({
    selector: 'app-reservation',
    templateUrl: 'reservation.component.html',
    styleUrls: ['reservation.component.css']
})
export class ReservationComponent {
    date: Date
    dispoCreneau1: any
    dispoCreneau2: any
    dispoCreneau3: any
    statusMessage: string|null

    constructor(private reservationService: ReservationService) {
    }

    onDateChanged() {
        this.reservationService.rechercher(this.date, 1).subscribe(response => {
            this.dispoCreneau1 = response;
            console.log(this.dispoCreneau1)
        })
        this.reservationService.rechercher(this.date, 2).subscribe(response => {
            this.dispoCreneau2= response;
            console.log(this.dispoCreneau2)
        })
        this.reservationService.rechercher(this.date, 3).subscribe(response => {
            this.dispoCreneau3 = response;
            console.log(this.dispoCreneau3)
        })
    }

    reserver(idSalle: number, date: Date, creneau: number) {
        this.reservationService.reserver(idSalle, date, creneau).subscribe(() => {
            console.log("Réservation réussie")
        });
    }
}
