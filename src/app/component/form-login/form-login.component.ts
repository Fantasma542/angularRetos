import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  user: User
  id_user: number

  constructor(private userService: UserService, private router: Router, private apiService: BooksService, private toast: ToastrService){
    this.user = new User(3, "Hola", "", "", "", "")
  }

  onSubmit(form:NgForm){
    
   
      this.userService.login(this.user).subscribe(
        (response: Respuesta) => {    
      if(!response.error){
      this.userService.logueado = true;

      this.userService.user = response.data_user
      const usuario = response.data_user[0];
  const idUser = usuario.id_user;
  
  this.user.id_user = idUser
  this.user.name = usuario.name
  this.user.last_name = usuario.last_name
  this.user.photo = usuario.photo
  console.log(idUser);
  
      console.log(this.user);
       
      console.log(form.value);
      console.log('Inicio de sesión exitoso:', response.data_user);
      console.log('ID del usuario:', response.data_user.id_user);
      console.log(this.apiService.user);
      this.userService.setUserId(idUser);
      this.userService.setUser(idUser);
      this.router.navigate(['/books'])
      this.toast.success("Inicio de sesión exitoso")
      
    }else{
      console.log("Error al iniciar sesion");
      this.toast.error("Credenciales Incorrectas")
  
          }
      }
    )
  } 
}

