import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: User | null = null; 
  user: User = new User(null, "", "", "", "", "");
  constructor(private userService: UserService, private toast: ToastrService)
  {
    this.loggedInUser = userService.loggedInUser;
  }
  modificarPerfil(nuevoNombre: string, nuevoApellido: string, nuevoEmail: string, nuevaFoto: string) {
    this.updateUserInfo(nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto);
  }
  private updateUserInfo(newName: string, newLastName: string, newEmail: string, newPhoto: string) {
    const updatedUser = {
      id_user: this.loggedInUser.id_user,
      name: newName,
      last_name: newLastName,
      email: newEmail,
      photo: newPhoto
    };
  
    this.userService.updateUserInfo(updatedUser).subscribe(
      (response) => {
        if (!response.error) {
          // Éxito: Los datos se actualizaron correctamente en el servidor
          console.log('Información del usuario actualizada con éxito.');
          this.loggedInUser.name = newName;
this.loggedInUser.last_name = newLastName;
this.loggedInUser.email = newEmail;
this.loggedInUser.photo = newPhoto;
this.toast.success("Modificacion exitosa")
        } else {
          // Error: No se pudo actualizar la información del usuario
          console.error('Error al actualizar la información del usuario.');
          this.toast.error("Error al actualizar usuario")
        }
      },
      (error) => {
        console.error('Error en la solicitud de actualización del usuario:', error);
      }
    );
  }
  enviar1(nuevoNombre: HTMLInputElement) {
    const newName = nuevoNombre.value.toString(); // Convierte el valor a cadena
    this.updateUserInfo(newName, this.user.last_name, this.user.email, this.user.photo);
  }
  enviar2(nuevoApellido: HTMLInputElement) {
    const newLastName = nuevoApellido.value.toString();
    this.updateUserInfo(this.user.name, newLastName, this.user.email, this.user.photo);
  }
  
  enviar3(nuevoEmail: HTMLInputElement) {
    const newEmail = nuevoEmail.value.toString();
    this.updateUserInfo(this.user.name, this.user.last_name, newEmail, this.user.photo);
  }
  
  enviar4(nuevaFoto: HTMLInputElement) {
    const newPhoto = nuevaFoto.value.toString();
    this.updateUserInfo(this.user.name, this.user.last_name, this.user.email, newPhoto);
  }


  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
 
}