import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({

  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    DashboardComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
