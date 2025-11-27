import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';
//import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
//import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  //{ path: '', component: HomePageComponent }, // main page
  //{ path: 'about-us', component: AboutUsPageComponent }, // About us page
  //{ path: 'contact', component: ContactPageComponent }, // Contact page
  { path: '**', redirectTo: '' }, // fallback -> main page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
