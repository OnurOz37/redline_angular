import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { SigninComponent} from "./modules/general/signin/signin.component";
import { SignupComponent } from './modules/general/signup/signup.component';
import { ReservationComponent } from './modules/general/reservation/reservation.component';
import { SitesComponent} from "./modules/general/sites/sites.component";
import { SallesComponent} from "./modules/general/salles/salles.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'sites', component: SitesComponent},
  { path: 'salles', component: SallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }