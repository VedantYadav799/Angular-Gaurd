import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Guard';
  constructor(private svs:AuthService,private router:Router){}
  onLogin(){
    alert('LOGIN');
    this.svs.login();
  }
  onLogout(){
    alert('LOG OUT');
    this.svs.logout();
    this.router.navigate(['home']); 

  }
}
