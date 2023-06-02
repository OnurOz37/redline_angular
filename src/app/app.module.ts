import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {AngularFirestore} from '@angular/fire/compat/firestore/';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SigninComponent} from "./modules/general/signin/signin.component";
import { SignupComponent } from './modules/general/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { ReservationComponent } from './modules/general/reservation/reservation.component';
import { SitesComponent } from './modules/general/sites/sites.component';
import { SallesComponent } from './modules/general/salles/salles.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiserviceService} from "./apiservice.service";
import {FormsModule} from "@angular/forms";
import {SallesService} from "./modules/general/salles/salles.service";
import {SitesService} from "./modules/general/sites/sites.service";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ReservationComponent,
    SitesComponent,
    SallesComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
  providers: [
      ApiserviceService,
      SallesService,
      SitesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }