import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from './register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  redireccionar(){
    redirectTo:RegisterComponent
  }
  constructor() { }

  ngOnInit() {
  }

}
