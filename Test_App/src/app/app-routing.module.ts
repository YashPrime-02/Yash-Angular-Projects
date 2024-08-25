import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';


const routes: Routes = [

  {path:'',component: HomeComponent, title:'Home Page'},
  {path:'home', component: HomeComponent, title:'Home Page'},
  {path:'about', component: AboutComponent, title:'About Page'},
  {path:'contact', component: ContactComponent,title:'Contact Page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
