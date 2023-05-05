import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { ReservationComponent } from './modules/general/reservation/reservation.component';
import { SitesComponent} from "./modules/general/sites/sites.component";
import { SallesComponent} from "./modules/general/sites/salles/salles.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'sites', component: SitesComponent,
    children: [
      { path: 'salles', component: SallesComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }