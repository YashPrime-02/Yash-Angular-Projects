import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';

const routes: Routes = [
{
path:'',
redirectTo:'home',
pathMatch:'full',
},
{
 path:'home',
 component: HomeComponent,
},
{
path:'search/: fromStationId/: toStationId/: dateofTravel',
component: SearchComponent
}, //this is paramaterized route coz search me teen cheeze hai from to and date of travel


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
