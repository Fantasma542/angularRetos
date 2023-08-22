import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public login: Login
  constructor(){
    this.login =new Login()
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.login);
    
  }
  ngOnInit(): void {
    
  }
}
