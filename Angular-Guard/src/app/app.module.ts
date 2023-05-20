import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppGuardService } from './app-guard.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

const appRoute: Routes=[
  {path:'', component:HomeComponent} ,
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutusComponent},
  {path:'privateInfo', component:ContactComponent, canActivate:[AppGuardService]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AppGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
