import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [

  {
   path:'login',
   component: LoginComponent,
  },

  {
    path:'side-nav',
    component: SideNavComponent,
   },
  {
    path:'dashboard', component: DashboardComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
